<script lang="ts">
	import { page } from '$app/stores';

	import Heading from '$components/heading/heading.svelte';
	import PageSection from '$components/page/page-section.svelte';
	import Stack from '$components/stack/stack.svelte';
	import Text from '$components/text/text.svelte';
</script>

<PageSection container>
	<Stack align="center">
		<Heading level="1">Someting went wrong!?!</Heading>
		<Text preset="display" size="2xl">{$page?.status}</Text>
		<Text preset="caption" size="xl">{$page?.error?.message}</Text>
	</Stack>
</PageSection>
