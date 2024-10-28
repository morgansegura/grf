<script lang="ts">
	import When from '$src/lib/components/when/when.svelte';

	import { serialize } from '$src/lib/utils/rich-text-serializer';
	import RenderBlocks from '../render-blocks/render-blocks.svelte';
	import Text from '$components/text/text.svelte';
	import List from '$src/lib/components/list/list.svelte';
	import ListItem from '$src/lib/components/list/list-item.svelte';
	import Icon from '@iconify/svelte';

	import './rich-text.css';
	import Heading from '$src/lib/components/heading/heading.svelte';
	import Divider from '$src/lib/components/divider/divider.svelte';

	// import type { SerializedLexicalChildNode } from '$src/lib/utils/rich-text-serializer';

	// import TextNode from './text-node.svelte';

	function getHeadingLevel(tag: string): string {
		switch (tag) {
			case 'h1':
				return '1';
			case 'h2':
				return '2';
			case 'h3':
				return '3';
			case 'h4':
				return '4';
			default:
				return '1';
		}
	}

	export let props: any;
	export let serializedHTML: any[] = serialize(props.children);

	console.log({ serializedHTML });
</script>

<When condition={Boolean(serializedHTML)}>
	{#each serializedHTML as node}
		<!-- Has an Addition child node -->
		{#if node?.content?.length}
			{#if node.type === 'paragraph'}
				<Text preset="caption" size="md">
					{#each node.content as child}
						{@html child.content}
					{/each}
				</Text>
			{:else if node.type === 'heading'}
				<Heading level={getHeadingLevel(node.tag)}>
					{#each node.content as child}
						{@html child.content}
					{/each}
				</Heading>
			{:else if node.type === 'list'}
				<List type={node.listType} class={node.listType}>
					{#each node.content as child}
						{#if node.listType === 'check'}
							<ListItem role="checkbox" tabindex="-1" data-checked={node.checked}>
								{#each child.content as item}
									<div class="checkbox">
										{#if node.checked}
											<Icon icon="mdi:check" />
										{/if}
									</div>
									{@html item.content}
								{/each}
							</ListItem>
						{:else}
							<ListItem>
								{#each child.content as item}
									{@html item.content}
								{/each}
							</ListItem>
						{/if}
					{/each}
				</List>
			{/if}
		{:else if node.type === 'horizontalrule'}
			<Divider appearance="dashed" spacing="lg" />
		{:else if node.type === 'component'}
			<RenderBlocks layout={node} {...node.props} />
		{/if}
	{/each}
</When>
