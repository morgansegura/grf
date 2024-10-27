<script lang="ts">
	import { tok } from '$utils/style';

	import When from '$components/when/when.svelte';
	// import Text from '$components/text/text.svelte';
	import Stack from '$components/stack/stack.svelte';
	// import Image from '$components/image/image.svelte';
	// import Heading from '$components/heading/heading.svelte';

	import './rich-text.css';

	import type { Page } from '$src/types/payload-types';

	export const IS_BOLD = 1;
	export const IS_ITALIC = 1 << 1;
	export const IS_STRIKETHROUGH = 1 << 2;
	export const IS_UNDERLINE = 1 << 3;
	export const IS_CODE = 1 << 4;
	export const IS_SUBSCRIPT = 1 << 5;
	export const IS_SUPERSCRIPT = 1 << 6;
	export const IS_HIGHLIGHT = 1 << 7;

	// function getHeadingLevel(tag: string): number {
	// 	switch (tag) {
	// 		case 'h1':
	// 			return 1;
	// 		case 'h2':
	// 			return 2;
	// 		case 'h3':
	// 			return 3;
	// 		case 'h4':
	// 			return 4;
	// 		default:
	// 			return 1;
	// 	}
	// }

	console.log($$props);
</script>

<!-- <When condition={Boolean(body && body?.length)}> -->
Morgan
<!-- {#each body?.layout as layout}
	{/each} -->

<Stack gap={tok('size', 1)}>
	<!-- Text -->
	<!-- {#each children as node}
			<When condition={node.type === 'heading'}>
				<Heading level={getHeadingLevel(node.tag)} display={getHeadingLevel(node.tag)}>
					{#each node.children as subnode}
						{#if subnode.format === IS_BOLD}
							<Text as="span" weight="bold">{subnode.text}</Text>
						{:else if subnode.format === IS_ITALIC}
							<Text as="em" weight="bold">{subnode.text}</Text>
						{:else}
							{subnode.text}
						{/if}
					{/each}
				</Heading>
			</When>
			<When condition={node.type === 'paragraph'}>
				<Text preset="caption" size="md" as="p" align="left">
					{#each node.children as subnode}
						{#if subnode.format === IS_BOLD}
							<Text as="span" weight="bold">{subnode.text}</Text>
						{:else if subnode.format === IS_ITALIC}
							<Text as="em" weight="bold">{subnode.text}</Text>
						{:else}
							{subnode.text}
						{/if}
					{/each}
				</Text>
			</When>
		{/each} -->
</Stack>
<!--
	<Stack gap={tok('size', 6)}>

		{#each children as node}
			<When condition={node.type === 'upload' && node.relationTo === 'media'}>
				<Image src={node?.value?.url} alt={node?.value?.alt} />
			</When>
		{/each}
	</Stack> -->
<!-- </When> -->
