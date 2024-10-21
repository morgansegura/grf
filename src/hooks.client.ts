import { MediaQuery } from './constants';
import { writable, type Writable } from 'svelte/store';
import { onMount, onDestroy } from 'svelte';
import { subscribe, unsubscribe, ready } from '@payloadcms/live-preview';

/**
 * Used as a convience method for accessing pre-defined
 * breakpoints. Uses `useMediaQuery` under the hood.
 */
export function useBreakpoints() {
	const xs = MediaQuery.xs;
	const sm = MediaQuery.sm;
	const md = MediaQuery.md;
	const lg = MediaQuery.lg;
	const xl = MediaQuery.xl;

	return {
		xs,
		sm,
		md,
		lg,
		xl
	};
}

/**
 * Used to create a live-editing hook
 * for use with PayloadCMS
 */

type UseLivePreviewProps<T> = {
	depth?: number;
	initialData: T;
	serverURL: string;
};

type UseLivePreviewReturn<T> = {
	data: Writable<T>;
	isLoading: Writable<boolean>;
};

export function useLivePreview<T>(props: UseLivePreviewProps<T>): UseLivePreviewReturn<T> {
	const { depth = 0, initialData, serverURL } = props;

	// Initialize the writable stores
	const data = writable<T>(initialData);
	const isLoading = writable<boolean>(true);

	// Flag to track if the ready message has been sent
	let hasSentReadyMessage = false;

	// Define the onChange function that will handle the merged data updates
	const onChange = (mergedData: T) => {
		// Update the store data with the merged data
		data.set(mergedData);
		isLoading.set(false);
	};

	// Subscribe and unsubscribe logic handled within Svelte lifecycle methods
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let subscription: any;

	onMount(() => {
		// Subscribe to the live preview data from the server
		subscription = subscribe({
			callback: onChange,
			depth,
			initialData,
			serverURL
		});

		// Send the 'ready' message once
		if (!hasSentReadyMessage) {
			hasSentReadyMessage = true;

			ready({
				serverURL
			});
		}
	});

	onDestroy(() => {
		// Unsubscribe when the component is destroyed
		if (subscription) {
			unsubscribe(subscription);
		}
	});

	return { data, isLoading };
}
