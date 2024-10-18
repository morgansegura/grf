<script lang="ts">
	import Tabs from './tabs.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Tabs">
	<svelte:component this={Hst.Variant} title="default">
		<Tabs />
	</svelte:component>
</svelte:component>
