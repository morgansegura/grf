import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import Button from '$lib/components/button/button.svelte';

describe('Button', () => {
	it('works', () => {
		render(Button, { props: {} });
	});
});
