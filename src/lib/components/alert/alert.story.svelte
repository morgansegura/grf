<script lang="ts">
	import Divider from '$components/divider/divider.svelte';

	import Alert from './alert.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Alert">
	<svelte:component this={Hst.Variant} title="default">
		<Alert onDismiss={() => console.log('closed')}>An alert that displays Info intent.</Alert>
		<Divider />
	</svelte:component>
</svelte:component>
