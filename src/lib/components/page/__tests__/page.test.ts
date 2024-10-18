import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import Page from '$lib/components/page/page.svelte';

describe('Page', () => {
	it('works', () => {
		render(Page, { props: {} });
	});
});
