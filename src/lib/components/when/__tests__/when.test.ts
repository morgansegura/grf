import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';
import When from '$lib/components/when/when.svelte';

describe('When', () => {
	it('works', () => {
		render(When, { props: { condition: true } });
	});
});
