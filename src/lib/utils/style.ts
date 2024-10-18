export type DesignTokenCategory =
	| 'bgcolor'
	| 'color'
	| 'duration'
	| 'ease'
	| 'font-size'
	| 'font-size-display'
	| 'font-size-text'
	| 'font-weight'
	| 'letter-spacing'
	| 'line-height'
	| 'opacity'
	| 'radius'
	| 'shadow'
	| 'size'
	| 'space'
	| 'z';

/**
 * Builds a CSS Custom property name for a given token
 * category and value.
 */
export function tok(category: DesignTokenCategory, value: string | number) {
	return `var(--${category}-${value})`;
}
