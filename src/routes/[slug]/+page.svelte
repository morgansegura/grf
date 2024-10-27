<script lang="ts">
	import PageSection from '$components/page/page-section.svelte';
	import LivePreview from '$src/blocks/live-preview/live-preview.svelte';

	$: initialData = $$props.initialData;
</script>

<PageSection container>
	Other Page
	<LivePreview depth={1} {initialData} />
</PageSection>
