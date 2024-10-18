import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import Divider from '$lib/components/divider/divider.svelte';

describe('Divider', () => {
	it('works', () => {
		render(Divider, {});
	});
});
