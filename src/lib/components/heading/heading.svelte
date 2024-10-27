<script lang="ts" context="module">
	export interface HeadingProps {
		display?: HeadingLevelProp | string;
		level?: HeadingLevelProp | string;
	}
</script>

<script lang="ts">
	import type { HeadingLevelProp } from '$components/component';

	import './heading.css';

	export let display: HeadingProps['display'] = '1',
		level: HeadingProps['level'] = '1';
</script>

<svelte:element this={`h${level}`} data-level={display} class="heading" {...$$restProps}>
	<slot />
</svelte:element>
