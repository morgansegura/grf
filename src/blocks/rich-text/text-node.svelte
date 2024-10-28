<script lang="ts">
	import Text from '$components/text/text.svelte';

	import type { SerializedLexicalNode } from '$src/types/serialized-editor';

	export let props: SerializedLexicalNode[];

	console.log({ props });
</script>

{#if props}
	{#each props as child}
		{#if child.type === 'link'}
			<!-- {#each child as node} -->
			Link Stuff
			<!-- {/each} -->
		{:else if child.format === 1}
			<Text as="span" weight="bold">{child.text}</Text>
		{:else if child.format === 2}
			<em>{child.text}</em>
			<!-- {:else if child?.underline}
			<Text as="span" underline>{child.text}</Text>
		{:else if child?.bold}
			<Text as="span" weight="bold">{child.text}</Text> -->
		{:else}
			<Text as="span">{child.text}</Text>
		{/if}
	{/each}
{/if}
