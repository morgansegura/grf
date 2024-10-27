<script lang="ts" context="module">
	export interface LivePreviewProps {
		serverURL?: string;
		depth?: number;
		initialData?: Page;
	}
</script>

<script lang="ts">
	import * as livePreview from '@payloadcms/live-preview';
	import { onDestroy, onMount } from 'svelte';
	import { writable } from 'svelte/store';

	import RichText from '$src/blocks/rich-text/rich-text.svelte';
	import When from '$src/lib/components/when/when.svelte';

	import type { Page } from '$src/types/payload-types';

	const { unsubscribe, subscribe, ready } = livePreview;

	export let depth: number = 1;
	export let initialData: Page[] = [];

	// Writable stores for data and loading state
	const data = writable<Page[]>(initialData);
	const isLoading = writable<boolean>(true);
	const serverURL = `${import.meta.env.VITE_BACKEND_SITE_URL}/admin`;

	let hasSentReadyMessage = false;

	let subscription: ReturnType<typeof subscribe>;

	// export function ready(options: { serverURL: string }) {
	// 	if (options.serverURL === `${import.meta.env.VITE_BACKEND_SITE_URL}`) {
	// 		options.serverURL = `${import.meta.env.VITE_FRONTEND_SITE_URL}`;
	// 	}

	// 	// Call the original ready function with modified options
	// 	livePreview.ready(options);
	// }

	// Callback function when live preview data changes
	const onChange = (mergedData: Page[]): void => {
		isLoading.set(false);
		data.set(mergedData);
		data.subscribe((value) => value);
	};

	const subscribeToPreview = () => {
		const subscription = subscribe({
			callback: onChange,
			depth,
			initialData,
			serverURL
		});

		// Indicate to the admin panel that we're ready to receive live updates
		if (!hasSentReadyMessage) {
			hasSentReadyMessage = true;
			// TODO: Figure this out
			ready({ serverURL: '*' });
		}

		return subscription;
	};

	const clear = (): void => {
		data.set(initialData);
		isLoading.set(true); // Reset loading to true
	};

	onMount(() => {
		subscription = subscribeToPreview(); // Subscribe when the component mounts
	});

	onDestroy(() => {
		if (subscription) {
			unsubscribe(subscription); // Clean up when the component is destroyed
			clear();
		}
	});
</script>

<!-- UI Logic to show data based on loading state -->
{#if Boolean($isLoading)}
	<slot name="loading" />
{:else}
	<When condition={Boolean($data)}>
		{#each $data as data}
			{console.log(data)}
		{/each}
	</When>
{/if}
