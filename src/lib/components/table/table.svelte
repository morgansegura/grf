<script lang="ts">
	import './table.css';

	export let styled: boolean = false;
</script>

<table class="table {$$restProps.class}" data-styled={styled} {...$$restProps}>
	<slot />
</table>
