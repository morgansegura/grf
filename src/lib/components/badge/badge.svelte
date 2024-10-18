<script lang="ts">
	import type { IntentProp, SizeProp } from '../component';
	import './badge.css';

	export let intent: Extract<IntentProp, 'notification' | 'neutral' | 'success'> | undefined =
			undefined,
		size: Extract<SizeProp, 'sm' | 'md' | 'lg'> | undefined = undefined;

	let content: any;

	console.log({ $$props });
</script>

<div
	class="badge"
	data-intent={intent}
	data-size={size}
	data-shape={content?.innerText.length === 1 ? 'circle' : undefined}
	{...$$restProps}
>
	<span bind:this={content}><slot /></span>
</div>
