<script lang="ts">
	import Heading from '$components/heading/heading.svelte';
	import Stack from '$components/stack/stack.svelte';
	import Text from '$components/text/text.svelte';
	// import Image from '$components/image/image.svelte';

	import './hero.css';

	interface HeroProps {
		description?: string;
		heading?: string;
	}

	export let description: HeroProps['description'] = undefined,
		heading: HeroProps['heading'] = undefined;
</script>

<Stack {...$$restProps}>
	<Stack>
		<Heading>
			{heading}
		</Heading>
		<Text>
			{description}
		</Text>
	</Stack>
	<Stack></Stack>
</Stack>
