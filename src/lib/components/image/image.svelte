<script lang="ts">
	import './image.css';

	import type { RadiusProp } from '../component';
	import { definedProps } from '$src/lib/utils/components';

	export let alt: string = 'Description for this asset.',
		cover: boolean = false,
		fill: boolean = false,
		radius: RadiusProp | string | undefined = undefined,
		src: string | undefined = undefined;

	function getCustomProperties({ radius }: any) {
		const customProperties: Record<string, any> = {};

		if (radius) {
			customProperties['--radius'] = radius;
		}

		return customProperties;
	}

	const mergedStyles = {
		...getCustomProperties({
			...definedProps({
				radius
			})
		})
	};
</script>

<div
	class="image"
	data-cover={cover}
	data-fill={fill}
	style:--image-radius={mergedStyles['--radius']}
	data-title={alt}
>
	<img {src} {alt} {...$$restProps} />
</div>
