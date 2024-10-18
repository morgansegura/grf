import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import Accordion from '$lib/components/accordion/accordion.svelte';

describe('Accordion', () => {
	it('works', () => {
		render(Accordion, { props: {} });
	});
});
