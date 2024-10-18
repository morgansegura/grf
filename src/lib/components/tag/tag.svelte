<script lang="ts">
	import { definedProps } from '$src/lib/utils/components';
	import './tag.css';

	export let color: string | undefined = undefined,
		bgcolor: string | undefined = undefined;

	function getCustomProperties({ bgcolor, color }: any) {
		const customProperties: Record<string, any> = {};

		if (bgcolor) {
			customProperties['--tag-bg-color'] = bgcolor;
		}
		if (color) {
			customProperties['--tag-text-color'] = color;
		}

		return customProperties;
	}

	const mergedStyles = {
		...getCustomProperties({
			...definedProps({
				bgcolor,
				color
			})
		})
	};
</script>

<div
	class="tag"
	style:--tag-bg-color={mergedStyles['--tag-bg-color']}
	style:--tag-text-color={mergedStyles['--tag-text-color']}
	{...$$restProps}
>
	<slot />
</div>
