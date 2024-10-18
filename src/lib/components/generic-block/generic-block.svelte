<script lang="ts">
	import { definedProps } from '$utils/components';
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

	function getCustomProperties({ bgcolor, radius }: GenericBlockProps) {
		const customProperties: Record<string, string> = {};

		if (bgcolor) {
			customProperties['--bg-color'] = bgcolor;
		}

		if (radius) {
			customProperties['--radius'] = radius;
		}

		return customProperties;
	}

	const mergedStyles = {
		...getCustomProperties({
			...definedProps({
				bgcolor,
				radius
			})
		})
	};
</script>

<div
	class="generic-block"
	style:--bg-color={mergedStyles['--bg-color']}
	style:--radius={mergedStyles['--radius']}
	data-appearance={appearance}
	{...$$restProps}
>
	<slot />
</div>
