<script lang="ts">
	import type { HeadingLevelProp } from '$components/component';

	import './heading.css';

	export let display: HeadingLevelProp | undefined = undefined,
		level: HeadingLevelProp | undefined = '1';
</script>

<svelte:element
	this={`h${level}`}
	data-level={display}
	class="heading {$$restProps.class}"
	{...$$restProps}
>
	<slot />
</svelte:element>
