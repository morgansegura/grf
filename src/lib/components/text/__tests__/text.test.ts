import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import Text from '$lib/components/text/text.svelte';

describe('Text', () => {
	it('works', () => {
		render(Text, {
			props: {
				align: 'center'
			}
		});
	});
});
