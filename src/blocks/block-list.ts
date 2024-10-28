import Hero from '$src/blocks/hero/hero.svelte';
import Divider from '$src/lib/components/divider/divider.svelte';

export type BlockIndexTypes = 'divider' | 'hero';
export interface BlockProps {
	divider: typeof Divider;
	hero: typeof Hero;
}

const blocks: BlockProps = {
	divider: Divider,
	hero: Hero
};

export default blocks;
