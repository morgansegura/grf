<script lang="ts">
	import Heading from '$components/heading/heading.svelte';
	import PageSection from '$components/page/page-section.svelte';
	import Text from '$components/text/text.svelte';
	import RenderBlocks from '$src/lib/components/blocks/render-blocks/render-blocks.svelte';
</script>

<PageSection container>
	<Heading level="1">Welcome to SvelteKit</Heading>
	<Text>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</Text>

	<RenderBlocks layout={$$props?.data?.page?.layout} />
</PageSection>
