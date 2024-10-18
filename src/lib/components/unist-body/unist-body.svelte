<script lang="ts">
  import "./unist-body.css";

  interface UnistBodyProps {
    props?: string;
  }

  export let props: UnistBodyProps["props"] = undefined;
</script>

<div class="unist-body" {...$$restProps}>
  <slot />
</div>
