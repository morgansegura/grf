<script lang="ts">
	import { convertStringToInitials } from '$src/lib/utils/helpers';
	import type { SizeProp } from '../component';

	import Image from '$components/image/image.svelte';
	import Text from '$components/text/text.svelte';

	import './avatar.css';

	interface AvatarProps {
		name: string;
		bgcolor?: string;
		color?: string;
		size?: Extract<SizeProp, 'sm' | 'md' | 'lg'>;
		src?: string;
	}

	export let color: AvatarProps['color'] = undefined,
		bgcolor: AvatarProps['bgcolor'] = undefined,
		name: AvatarProps['name'] = 'Avatar',
		size: AvatarProps['size'] = undefined,
		src: AvatarProps['src'] = undefined;
</script>

<div
	class="avatar"
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
