import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import GenericBlock from '$lib/components/generic-block/generic-block.svelte';
import { tok } from '$src/lib/utils/style';

describe('GenericBlock', () => {
	it('accepts radius and bgcolor props', () => {
		render(GenericBlock, {
			props: { radius: tok('radius', 'full'), bgcolor: tok('color', 'success') }
		});
	});
	it('accepts styles', () => {
		render(GenericBlock, {
			props: { style: `color; ${tok('radius', 'full')}` }
		});
	});
});
