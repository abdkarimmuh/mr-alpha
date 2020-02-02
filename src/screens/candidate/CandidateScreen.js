import Images from '@app/assets/images';
import Strings from '@app/assets/strings';
import { Text } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import { Metrics } from '@app/themes';
import React, { PureComponent } from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';

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
						<View style={{ margin: 16 }}>
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
