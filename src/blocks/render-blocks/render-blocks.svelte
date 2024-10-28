<script lang="ts">
	import blocks from '../block-list';

	import When from '$components/when/when.svelte';

	import type { BlockIndexTypes, BlockProps } from '../block-list';

	interface Block {
		blockType: BlockIndexTypes;
		[key: string]: unknown;
		props: {
			appreance: any;
		};
	}

	interface RenderBlocksProps {
		layout: Block[];
	}

	export let layout: RenderBlocksProps['layout'] = [];

	function getBlockComponent(blockType: string): BlockProps[BlockIndexTypes] | null {
		if (blockType in blocks) {
			return blocks[blockType as BlockIndexTypes];
		}
		return null;
	}
</script>

<When condition={Boolean(layout?.length)}>
	{#each layout as block}
		{console.log(layout)}
		{#if Boolean(getBlockComponent(block.blockType))}
			<svelte:component this={getBlockComponent(block.blockType)} {...block.props} />
		{:else}
			<p>Dangit!</p>
		{/if}
	{/each}
</When>
