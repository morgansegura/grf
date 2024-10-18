export const global = {
	site: {
		long_name: 'Grass Roots Foundation',
		short_name: 'Grass Roots',
		acronymn: 'GRF',
		slogan: 'Building stronger individuals and communities through the beautiful game.'
	}
};
/**
 * The media queries used in the app.
 * @see theme.css
 */
export enum MediaQuery {
	xs = '(min-width: 0)',
	sm = '(min-width: 640px)',
	md = '(min-width: 768px)',
	lg = '(min-width: 1024px)',
	xl = '(min-width: 1280px)'
}

// The keys of the breakpoints used in the UI
export const SUPPORTED_BREAKPOINT_KEYS = ['default', ...Object.keys(MediaQuery)] as (
	| 'default'
	| keyof typeof MediaQuery
)[];

// Window width breakpoints for Chromatic snapshot testing
export const SNAPSHOT_BREAKPOINTS = [400, 800, 1400];

/**
 * Duration values for animations.
 */
export enum Duration {
	Short = 150,
	Normal = 250,
	Long = 400
}
