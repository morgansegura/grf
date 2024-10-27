import * as api from '$src/lib/utils/api';
import { error } from '@sveltejs/kit';
import { LANDING_PAGE_MOCK } from '$src/mocks/data/landing.mock';

export async function load({
	fetch,
	params
}: {
	fetch: typeof globalThis.fetch;
	params?: Record<string, string>;
}) {
	const slug = params?.slug;
	const url = `pages?where[slug][equals]=${slug}&draft=false`;
	const pageReq = await api.get(fetch, url, params);
	const initialData = LANDING_PAGE_MOCK;

	const pageData = pageReq.docs[0];

	if (!pageData) {
		error(404, {
			message: 'Not found'
		});
	}

	return {
		url: `${import.meta.env.VITE_FRONTEND_SITE_URL}/api/${url}`,
		initialData,
		page: pageData
	};
}
