import * as api from '$src/lib/utils/api';
import { error } from '@sveltejs/kit';

export async function load({
	fetch,
	params
}: {
	fetch: typeof globalThis.fetch;
	params?: Record<string, string>;
}) {
	const slug = 'index';
	const url = `pages?where[slug][equals]=${slug}`;
	const pageReq = await api.get(fetch, url, params);

	const pageData = pageReq.docs[0];

	if (!pageData) {
		error(404, {
			message: 'Not found'
		});
	}

	return {
		url: `${import.meta.env.VITE_BACKEND_SITE_URL}`,
		initialData: pageData,
		page: pageData
	};
}
