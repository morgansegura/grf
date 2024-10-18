<script lang="ts">
	import Footer from '$components/_layout/footer/footer.svelte';
	import Header from '$components/_layout/header/header.svelte';

	import { useBreakpoints } from '$src/hooks.client';
	import Stack from '$components/stack/stack.svelte';
	import GenericBlock from '$components/generic-block/generic-block.svelte';
	import { tok } from '$src/lib/utils/style';
	import Text from '$components/text/text.svelte';
	import Grid from '$components/grid/grid.svelte';
	import Image from '$components/image/image.svelte';

	import Main from './page-body.svelte';
	import Page from './page.svelte';
	import Section from './page-section.svelte';

	export let Hst;

	const { xs, lg } = useBreakpoints();
	$: desktopMenu = [
		{
			href: '/',
			label: 'Home',
			target: '_blank',
			'data-title': 'test data title'
		}
	];
</script>

<svelte:component this={Hst.Story} title="Component/Page layout">
	<svelte:component this={Hst.Variant} title="default">
		<Page>
			<Header>
				<GenericBlock
					apperance="card"
					style={`background-color: ${tok('color', 'neutral-100')}; padding: ${tok('space', 2)}; width: 100vw;`}
				>
					<Stack direction="row" style={``}>
						<div style="flex: 1 0 auto;">Logo</div>
						<div>Navigation will go here.</div>
					</Stack>
				</GenericBlock>
			</Header>
			<Main>
				<Section as="article">Text in the mddle</Section>
			</Main>
			<Footer>
				<GenericBlock
					apperance="card"
					bgcolor={tok('color', 'neutral-200')}
					radius={tok('radius', 'md')}
					style={`padding: ${tok('space', 2)};`}
				>
					<Stack>
						<a href="/">Logo</a>
						<Grid columns={{ default: 1, md: 2, lg: 3 }} gap={tok('space', 6)}>
							<Text preset="caption" size="lg" weight="semibold">Snazzy company slogan.</Text>
							<Text preset="caption" size="sm">Snazzy company slogan.</Text>
							<div>
								<Image
									radius={tok('radius', 'xl')}
									src="https://images.pexels.com/photos/28588325/pexels-photo-28588325/free-photo-of-close-up-of-lush-green-prickly-pear-cacti.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								/>
							</div>
						</Grid>
					</Stack>
				</GenericBlock>
			</Footer>
		</Page>
	</svelte:component>
</svelte:component>
