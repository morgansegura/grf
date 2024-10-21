import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import Truncate from '$lib/components/truncate/truncate.svelte';

describe('Truncate', () => {
	it('works', () => {
		render(Truncate, { props: {} });
	});
});
