<script lang="ts">
	import When from '$components/when/when.svelte';
	import { blocks } from './block-list.svelte';

	import type { BlockIndexTypes } from './block-list.svelte';

	interface Block {
		[x: string]: BlockIndexTypes;
	}

	interface RenderBlocksProps {
		layout: Block[];
	}

	export let layout: RenderBlocksProps['layout'] = [];
</script>

{#each layout as block}
	<When condition={Boolean(blocks[block.blockType])}>
		<svelte:component this={blocks[block.blockType]} {...block} />
	</When>
{/each}
