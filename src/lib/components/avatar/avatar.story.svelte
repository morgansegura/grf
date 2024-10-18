<script lang="ts">
	import Stack from '$components/stack/stack.svelte';
	import { tok } from '$src/lib/utils/style';
	import GenericBlock from '../generic-block/generic-block.svelte';
	import Avatar from './avatar.svelte';

	export let Hst;

	const image = 'https://avatarfiles.alphacoders.com/364/364547.png';
</script>

<svelte:component this={Hst.Story} title="Component/Avatar">
	<svelte:component this={Hst.Variant} title="Sizes">
		<Stack>
			<Avatar size="sm" src={image} />
			<Avatar size="md" src={image} />
			<Avatar size="lg" src={image} />
		</Stack>
	</svelte:component>
	<svelte:component this={Hst.Variant} title="Initials">
		<Stack>
			<Avatar name="Default Avatar" />
			<Avatar
				name="Cool Beans Man"
				bgcolor={tok('color', 'error')}
				color={tok('color', 'neutral-900')}
			/>
			<Avatar
				name="A B C D"
				bgcolor={tok('color', 'success')}
				color={tok('color', 'neutral-900')}
			/>
			<Avatar
				name="Will This"
				bgcolor={tok('color', 'warning')}
				color={tok('color', 'neutral-900')}
			/>
		</Stack>
	</svelte:component>
</svelte:component>
