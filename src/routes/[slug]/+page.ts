import * as api from '$lib/utils/api';
import { error } from '@sveltejs/kit';

export async function load({
	fetch,
	params
}: {
	fetch: typeof globalThis.fetch;
	params?: Record<string, string>;
}) {
	const slug = params?.slug || 'index';
	const pageReq = await api.get(fetch, `pages?where[slug][equals]=${slug}&draft=false`, params);

	const pageData = pageReq.docs[0];

	if (!pageData) {
		error(404, {
			message: 'Not found'
		});
	}

	return { page: pageData };
}
