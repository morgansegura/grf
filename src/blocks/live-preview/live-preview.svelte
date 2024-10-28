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
	export let initialData: Page;

	// Writable stores for data and loading state
	const data = writable<Page>(initialData);
	const isLoading = writable<boolean>(true);
	const serverURL = `${import.meta.env.VITE_BACKEND_SITE_URL}`;
	// const frontendURL = `${import.meta.env.VITE_FRONTEND_SITE_URL}`;

	let hasSentReadyMessage = false;

	let subscription: ReturnType<typeof subscribe>;

	// Callback function when live preview data changes
	const onChange = (mergedData: Page): void => {
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
		isLoading.set(true);
	};

	onMount(() => {
		subscription = subscribeToPreview();
	});

	onDestroy(() => {
		if (subscription) {
			unsubscribe(subscription);
			clear();
		}
	});
</script>

{#if Boolean($isLoading)}
	<slot name="loading" />
{:else}
	<When condition={Boolean($data?.richText?.root)}>
		<RichText props={$data?.richText?.root} />
	</When>
{/if}
