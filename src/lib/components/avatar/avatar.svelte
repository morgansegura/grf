<script lang="ts">
	import { convertStringToInitials } from '$src/lib/utils/helpers';
	import type { SizeProp } from '../component';

	import Image from '$components/image/image.svelte';
	import Text from '$components/text/text.svelte';

	import './avatar.css';

	export let name: string | undefined = undefined,
		bgcolor: string | undefined = undefined,
		color: string | undefined = undefined,
		size: Extract<SizeProp, 'sm' | 'md' | 'lg'> | undefined = undefined,
		src: string | undefined = undefined;
</script>

<div
	class="avatar {$$restProps.class}"
	style:--avatar-color={color}
	style:--avatar-bgcolor={bgcolor}
	data-size={size}
	{...$$restProps}
>
	{#if src}
		<Image alt={name} {src} fill={true} cover={true} />
	{:else}
		<Text>{convertStringToInitials(name)}</Text>
	{/if}
</div>
