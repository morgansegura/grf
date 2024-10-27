<script lang="ts">
	import RenderContent from '$src/blocks/rich-text/rich-text.svelte';
	import Stack from '$components/stack/stack.svelte';
	import When from '$components/when/when.svelte';

	import './content.css';
</script>

<When condition={Boolean($$props.columns)}>
	<Stack class="content" {...$$restProps}>
		{#each $$props.columns as column}
			<RenderContent body={column.content.root.children} />
		{/each}
	</Stack>
</When>
