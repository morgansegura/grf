<script>
	import '@fontsource-variable/sora';
	import 'modern-normalize/modern-normalize.css';
	import '$src/public/global.css';

	import Footer from '$components/_layout/footer/footer.svelte';
	import Header from '$components/_layout/header/header.svelte';
	import Page from '$components/page/page.svelte';
	import PageBody from '$components/page/page-body.svelte';
</script>

<Page>
	<Header />
	<PageBody>
		<slot />
	</PageBody>
	<Footer />
</Page>
