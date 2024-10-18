<script lang="ts">
	import './unstyled-button.css';
</script>

<button
	class="unstyled-button {$$restProps.class}"
	on:click
	on:mouseover
	on:focus
	on:mouseenter
	on:mouseleave
	{...$$restProps}
>
	<slot />
</button>
