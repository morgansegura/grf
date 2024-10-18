/**
 * @file Generates all the files for a new page component.
 */

import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { toKebabCase, toCapsUnderscore } from '../src/lib/utils/helpers';

import { format } from 'prettier';

const CSS_TEMPLATE = (name: string) => `
.${toKebabCase(name)} {
  color: inherit;
}
`;

const ROUTE_TEST_TEMPLATE = (name: string) => `
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { ${toCapsUnderscore(name)}_PAGE_CONTENT } from '$lib/data/content/${toKebabCase(name)}.content';
import ${name} from '../+page.svelte';

describe('${name} Route Test', () => {
	it('renders two blocks of test from file', async () => {
		const MockLoaderResult = {
			params: ${toCapsUnderscore(name)}_PAGE_CONTENT?.params,
			meta: ${toCapsUnderscore(name)}_PAGE_CONTENT?.meta
		};
		const props = { data: MockLoaderResult };

		render(${name}, props);

		// Run at least two route tests
		const testOne = await screen.getByText('${name} Component');

		expect(testOne).toBeInTheDocument();
	});
});

`;
const LAYOUT_TEST_TEMPLATE = (name: string) => `
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { ${toCapsUnderscore(name)}_PAGE_CONTENT } from '$lib/data/content/${toKebabCase(name)}.content';
import ${name} from '../+page.svelte';

describe('${name} Route Test', () => {
	it('renders two blocks of test from file', async () => {
		const MockLoaderResult = {
			params: ${toCapsUnderscore(name)}_PAGE_CONTENT?.params,
			meta: ${toCapsUnderscore(name)}_PAGE_CONTENT?.meta
		};
		const props = { data: MockLoaderResult };

		render(${name}, props);

		// Run at least two route tests
		const testOne = await screen.getByText('${name} Component');

		expect(testOne).toBeInTheDocument();
	});
});

`;

const ROUTE_TEMPLATE = (name: string) => `
		<script lang="ts">
			import "./${toKebabCase(name)}.css";

		  export let data;
		</script>


		<div class="${toKebabCase(name)}">
		  ${name} Component
		</div>

		<style lang="postcss">
		  .${toKebabCase(name)} {}
		</style>
`;

const SERVER_TEMPLATE = (name: string) => `
import { ${toCapsUnderscore(name)}_PAGE_CONTENT as db } from '$lib/data/content/${toKebabCase(name)}.content';

export async function load() {
	return {
	...db
	};
}

`;

const STORY_TEMPLATE = (name: string) => `
<script lang="ts">
	import { ${toCapsUnderscore(name)}_PAGE_CONTENT as data } from '$lib/data/content/${toKebabCase(name)}.content';
	import ${name} from './+page.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Route/${name}">
	<svelte:component this={Hst.Variant}>
		<${name} data="{{ ...data} }}" />
	</svelte:component>
</svelte:component>
`;

const CONTENT_TEMPLATE = (name: string) => `
import type { PageQuery } from '../types';

export const ${toCapsUnderscore(name)}_PAGE_CONTENT: PageQuery['page'] = {
	id: "${uuidv4()}",
	title: "${name}",
	meta: {
		description: 'Example meta description for ${name}.',
		title: 'Example meta title for ${name}.',
	},
	params: {},
	content: {}
}
`;

const name = process.argv.slice(2)[0];
const directory = toKebabCase(name);
const output = path.join.bind(path, import.meta.dirname, '../src/routes');
const contentOutput = path.join.bind(path, import.meta.dirname, '../src/lib/data/content');

async function run() {
	try {
		fs.mkdirSync(output(directory));
		fs.mkdirSync(output(directory, '__tests__'));

		fs.writeFileSync(
			output(directory, `${toKebabCase(name)}.css`),
			await format(CSS_TEMPLATE(name), { parser: 'css' })
		);
		fs.writeFileSync(
			output(directory, `+page.svelte`),
			await format(ROUTE_TEMPLATE(name), { parser: 'html' })
		);
		fs.writeFileSync(
			output(directory, `+page.server.ts`),
			await format(SERVER_TEMPLATE(name), { parser: 'typescript' })
		);
		fs.writeFileSync(
			output(directory, `${toKebabCase(name)}.story.svelte`),
			await format(STORY_TEMPLATE(name), { parser: 'html' })
		);
		fs.writeFileSync(
			output(directory, '__tests__', `route.test.ts`),
			await format(ROUTE_TEST_TEMPLATE(name), { parser: 'typescript' })
		);
		fs.writeFileSync(
			output(directory, '__tests__', `${toKebabCase(name)}.test.ts`),
			await format(LAYOUT_TEST_TEMPLATE(name), { parser: 'typescript' })
		);
		fs.writeFileSync(
			contentOutput(`${toKebabCase(name)}.content.ts`),
			await format(CONTENT_TEMPLATE(name), { parser: 'typescript' })
		);
	} catch (error) {
		console.error(error);
	}
}

void run();
