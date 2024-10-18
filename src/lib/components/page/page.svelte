<script lang="ts">
	import Stack from '$lib/components/stack/stack.svelte';

	import './page.css';
</script>

<div class="page {$$restProps.class}">
	<slot />
</div>
