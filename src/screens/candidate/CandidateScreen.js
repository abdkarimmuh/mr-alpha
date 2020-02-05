import React, { PureComponent } from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import Images from '@app/assets/images';
import Strings from '@app/assets/strings';
import { Text, Card, Surface } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import { Metrics } from '@app/themes';

type Props = {};

const profile = {
	name: 'H. Anies Rasyid Baswedan, S.E., M.P.P., Ph.D.',
	candidate: 'Calon Gubernur DKI Jakarta',
	biography: `${Strings.LOREMIPSUM}\n${Strings.LOREMIPSUM}\n\n${
		Strings.LOREMIPSUM
	}\n${Strings.LOREMIPSUM}`,
};

class VisionScreen extends PureComponent<Props> {
	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<LayoutAppbar
					title="Profil Calon"
					hasBack
					style={{ padding: 0, paddingBottom: 30 }}
				>
					<ScrollView>
						<Image
							source={Images.logo.banner}
							style={{
								height: Metrics.HeightCarousel,
								width: Metrics.DEVICE_WIDTH,
								resizeMode: 'contain',
							}}
						/>
						{/* <Card
							style={{
								height: 50,
								width: 50,
								position: 'absolute',
								top: 128,
								left: 24,
							}}
						>
							<Card.Cover source={{ uri: 'https://via.placeholder.com/150' }} />
						</Card> */}
						<Surface
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								elevation: 4,
								position: 'absolute',
								top: 128,
								left: 24,
							}}
						>
							<Image
								source={{ uri: 'https://via.placeholder.com/150' }}
								style={{
									height: 100,
									width: 100,
								}}
							/>
						</Surface>
						<View style={{ margin: 16, paddingTop: 32 }}>
							<Text title>{profile.name}</Text>
							<Text caption style={{ marginBottom: 20 }}>
								{profile.candidate}
							</Text>

							<Text>{profile.biography}</Text>
						</View>
					</ScrollView>
				</LayoutAppbar>
			</SafeAreaView>
		);
	}
}

export default VisionScreen;
