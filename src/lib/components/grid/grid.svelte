<script lang="ts">
	import { createResponsivePropCSSProperties, definedProps } from '$src/lib/utils/components';
	import type { ResponsiveProp } from '../component';
	import './grid.css';

	export let columns: ResponsiveProp<number> | undefined = undefined,
		gap: ResponsiveProp<number> | ResponsiveProp<string> | undefined = undefined;

	function getCustomProperties({ gap, columns }: any) {
		const base: Record<string, any> = {};

		if (gap) {
			base['--grid-gap'] = gap;
		}

		return Object.assign(
			base,
			createResponsivePropCSSProperties(columns, {
				name: '--grid-column-count'
			})
		);
	}

	const mergedStyles = {
		...getCustomProperties({
			...definedProps({
				gap,
				columns
			})
		})
	};
</script>

<div
	class="grid"
	style:--grid-column-count-default={mergedStyles['--grid-column-count-default']}
	style:--grid-column-count-sm={mergedStyles['--grid-column-count-sm']}
	style:--grid-column-count-md={mergedStyles['--grid-column-count-md']}
	style:--grid-column-count-lg={mergedStyles['--grid-column-count-lg']}
	style:--grid-column-count-xl={mergedStyles['--grid-column-count-xl']}
	style:--grid-gap={mergedStyles['--grid-gap']}
	{...$$restProps}
>
	<slot />
</div>
