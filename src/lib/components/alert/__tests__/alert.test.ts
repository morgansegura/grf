import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import Alert from '$lib/components/alert/alert.svelte';

describe('Alert', () => {
	it('works', () => {
		render(Alert, {});
	});
});
