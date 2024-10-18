<script lang="ts">
	import type { StackAsProp } from '../component';
	import './page.css';

	interface PageSectionProps {
		as?: StackAsProp;
		container: boolean;
	}

	export let as: PageSectionProps['as'] = 'div',
		container: PageSectionProps['container'] = false;
</script>

<svelte:element this={as} class="page-section" data-container={container} {...$$restProps}>
	<slot />
</svelte:element>
