<script lang="ts">
	import Heading from '$components/heading/heading.svelte';
	import Stack from '$components/stack/stack.svelte';
	import Text from '$components/text/text.svelte';

	import './two-column.css';

	interface TwoColumnProps {
		description?: string;
		heading?: string;
	}
	export let description: TwoColumnProps['description'] = undefined,
		heading: TwoColumnProps['heading'] = undefined;
</script>

<Stack>
	<Heading>
		{heading}
	</Heading>
	<Text>
		{description}
	</Text>
</Stack>
