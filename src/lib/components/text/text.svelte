<script lang="ts">
	import { definedProps } from '$utils/components';
	import { tok } from '$utils/style';

	import './text.css';

	import type {
		CommonProps,
		FontFamilyProp,
		FontWeightProp,
		LetterSpacingProp,
		LineHeightProp,
		SizeProp,
		TextAlignProp,
		TextTransformProp,
		TextAsProp
	} from '../component';

	interface TextProps extends CommonProps {
		align?: TextAlignProp;
		as?: TextAsProp;
		color?: string;
		family?: FontFamilyProp;
		height?: LineHeightProp;
		preset?: 'caption' | 'display';
		size?: Extract<SizeProp, 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'>;
		spacing?: LetterSpacingProp;
		title?: string;
		transform?: TextTransformProp;
		weight?: FontWeightProp;
	}
	/**
	 * Returns the props for the given preset.
	 */
	function getPresetProps(preset: TextProps['preset']): Partial<TextProps> {
		switch (preset) {
			case 'caption':
				return {
					height: 'snug'
				};
			case 'display':
				return {
					height: 'tight',
					spacing: 'tight',
					weight: 'semibold'
				};
			default:
				return {};
		}
	}

	interface TextComponentProps {
		align?: TextAlignProp;
		as?: TextAsProp;
		color?: string;
		height?: LineHeightProp;
		family?: FontFamilyProp;
		preset?: TextProps['preset'] | 'caption';
		size?: Extract<SizeProp, 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'>;
		spacing?: LetterSpacingProp;
		transform?: TextTransformProp;
		weight?: FontWeightProp;
	}
	export let align: TextComponentProps['align'] = undefined,
		as: TextComponentProps['as'] = 'div',
		color: TextComponentProps['color'] = undefined,
		height: TextComponentProps['height'] = undefined,
		family: TextComponentProps['family'] = undefined,
		preset: TextComponentProps['preset'] = undefined,
		size: TextComponentProps['size'] = undefined,
		spacing: TextComponentProps['spacing'] = undefined,
		transform: TextComponentProps['transform'] = undefined,
		weight: TextComponentProps['weight'] = undefined;

	function getCustomProperties({
		align,
		color,
		height,
		preset,
		size,
		spacing,
		transform,
		weight
	}: TextComponentProps) {
		const customProperties = {} as Record<string, string>;

		if (align) {
			customProperties['--text-align'] = align;
		}

		if (color) {
			customProperties['--text-color'] = tok('color', color);
		}

		if (height) {
			customProperties['--text-line-height'] = tok('line-height', height);
		}

		if (size) {
			if (preset === 'display') {
				customProperties['--text-font-size'] = tok('font-size-display', size);
			} else {
				customProperties['--text-font-size'] = tok('font-size-text', size);
			}
		}

		if (spacing) {
			customProperties['--text-letter-spacing'] = tok('letter-spacing', spacing);
		}

		if (transform) {
			customProperties['--text-transform'] = transform;
		}

		if (weight) {
			customProperties['--text-font-weight'] = tok('font-weight', weight);
		}
		return customProperties;
	}

	const mergedStyles = {
		...getCustomProperties({
			...getPresetProps(preset),
			...definedProps({
				align,
				color,
				family,
				height,
				preset,
				size,
				spacing,
				transform,
				weight
			})
		})
	};
</script>

<svelte:element
	this={as}
	class="text"
	style:--text-align={mergedStyles['--text-align']}
	style:--text-color={mergedStyles['--text-color']}
	style:--text-line-height={mergedStyles['--text-line-height']}
	style:--text-font-size={mergedStyles['--text-font-size']}
	style:--text-letter-spacing={mergedStyles['--text-letter-height']}
	style:--text-transform={mergedStyles['--text-transform']}
	style:--text-font-weight={mergedStyles['--text-font-weight']}
	style:--text-font-family={mergedStyles['--text-font-family']}
	{...$$restProps}
>
	<slot />
</svelte:element>
