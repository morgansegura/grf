<script lang="ts" context="module">
	import Hero from '$components/blocks/hero/hero.svelte';
	import TwoColumn from '$components/blocks/two-column/two-column.svelte';

	export type BlockIndexTypes = 'hero' | 'two-column';
	export type BlockProps = Record<BlockIndexTypes, BlockComponentTypes>;
	export type BlockComponentTypes = typeof Hero | typeof TwoColumn;

	export const blocks: BlockProps = {
		hero: Hero,
		'two-column': TwoColumn
	};
</script>
