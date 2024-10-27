export const base = `${import.meta.env.VITE_BACKEND_SITE_URL}/api`;
export const media_base = `${base}/media`;

const cache = new Map();

export async function get(
	fetch: typeof globalThis.fetch,
	endpoint: string,
	params?: Record<string, string>
) {
	const q = new URLSearchParams(params);
	const withQueryParams = Object.keys(q).length ? `?${q}` : ``;

	const url = `${base}/${endpoint}${withQueryParams}`;

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		credentials: 'include'
	});

	const data = await response.json();

	if (cache.has(url)) {
		console.log('cache HIT', url);
		return cache.get(url);
	}
	console.log('cache MISS', url);

	cache.set(url, data);

	return data;
}

export function media(file_path: string, width: number) {
	return `${media_base}/w${width}${file_path}`;
}
