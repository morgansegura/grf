<script lang="ts">
	import './image.css';

	import type { RadiusProp } from '$components/component';

	interface ImageProps {
		alt: string;
		cover?: boolean;
		fill?: boolean;
		radius?: RadiusProp | string;
		src: string;
	}

	export let alt: ImageProps['alt'],
		cover: ImageProps['cover'] = false,
		fill: ImageProps['fill'] = false,
		radius: ImageProps['radius'] = undefined,
		src: ImageProps['src'];
</script>

<div
	class="image"
	data-cover={cover}
	data-fill={fill}
	style:--image-radius={radius}
	data-title={alt}
>
	<img {src} {alt} {...$$restProps} />
</div>
