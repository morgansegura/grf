<script lang="ts">
	import PageSection from '$components/page/page-section.svelte';
	import LivePreview from '$src/blocks/live-preview/live-preview.svelte';
	// import RenderBlocks from '$src/blocks/render-blocks/render-blocks.svelte';

	export let initialData = $$props.data.initialData;
</script>

<PageSection container>
	Home Page
	<!-- <RenderBlocks layout={$$props?.data?.page?.layout} /> -->

	<LivePreview depth={1} {initialData}>
		<div slot="loading">is Loading...</div>
	</LivePreview>
</PageSection>
