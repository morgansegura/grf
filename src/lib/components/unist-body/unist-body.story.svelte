<script lang="ts">
  import UnistBody from "./unist-body.svelte";

  export let Hst;
</script>

<svelte:component this="{Hst.Story}" title="Component/UnistBody">
  <svelte:component this="{Hst.Variant}" title="default">
    <UnistBody />
  </svelte:component>
</svelte:component>
