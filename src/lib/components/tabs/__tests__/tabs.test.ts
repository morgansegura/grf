import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import Tabs from '$lib/components/tabs/tabs.svelte';

describe('Tabs', () => {
	it('works', () => {
		render(Tabs, { props: {} });
	});
});
