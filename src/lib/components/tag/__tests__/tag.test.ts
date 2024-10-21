import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import Tag from '$lib/components/tag/tag.svelte';

describe('Tag', () => {
	it('works', () => {
		render(Tag, { props: {} });
	});
});
