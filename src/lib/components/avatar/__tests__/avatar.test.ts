import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import Avatar from '$lib/components/avatar/avatar.svelte';
import { tok } from '$src/lib/utils/style';

describe('Avatar', () => {
	it('accepts size props', () => {
		render(Avatar, { props: { size: 'lg' } });
	});
	it('accepts styles', () => {
		render(Avatar, {
			props: { style: `color; ${tok('radius', 'full')}` }
		});
	});
});
