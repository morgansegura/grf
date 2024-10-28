<script lang="ts">
	import Stack from '$components/stack/stack.svelte';
	import When from '$components/when/when.svelte';

	import './content.css';
</script>

<When condition={Boolean($$props.columns)}>
	<Stack class="content" {...$$restProps}>RenderContent, what does it do?</Stack>
</When>
