<script lang="ts">
	import type { RadiusProp } from '$components/component';
	import './generic-block.css';

	interface GenericBlockProps {
		appearance?: 'card' | 'tile';
		bgcolor?: string;
		radius?: RadiusProp | string;
	}

	export let appearance: GenericBlockProps['appearance'] = undefined,
		bgcolor: GenericBlockProps['bgcolor'] = undefined,
		radius: GenericBlockProps['radius'] = undefined;
</script>

<div
	class="generic-block"
	style:--bg-color={bgcolor}
	style:--radius={radius}
	data-appearance={appearance}
	{...$$restProps}
>
	<slot />
</div>
