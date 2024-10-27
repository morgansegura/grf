import Hero from '$src/blocks/hero/hero.svelte';
import RichText from '$src/blocks/rich-text/rich-text.svelte';
import Content from '$src/blocks/content/content.svelte';

export type BlockIndexTypes = 'hero' | 'richText' | 'content';
export interface BlockProps {
	hero: typeof Hero;
	richText: typeof RichText;
	content: typeof Content;
}

const blocks: BlockProps = {
	content: Content,
	hero: Hero,
	richText: RichText
};

export default blocks;
