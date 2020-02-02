import Images from '@app/assets/images';
import Strings from '@app/assets/strings';
import { Text } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import { Metrics } from '@app/themes';
import React, { PureComponent } from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';

type Props = {};

const vision = {
	visi: Strings.LOREMIPSUM,
	misi: Strings.LOREMIPSUM,
};

class VisionScreen extends PureComponent<Props> {
	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<LayoutAppbar
					title="Visi Misi"
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
							<Text
								medium
								bold
								style={{ textAlign: 'center', marginBottom: 16 }}
							>
								Visi
							</Text>
							<Text tiny style={{ textAlign: 'center', marginBottom: 40 }}>
								{vision.visi}
							</Text>

							<Text
								medium
								bold
								style={{ textAlign: 'center', marginBottom: 16 }}
							>
								Misi
							</Text>
							<Text tiny>{vision.misi}</Text>
						</View>
					</ScrollView>
				</LayoutAppbar>
			</SafeAreaView>
		);
	}
}

export default VisionScreen;
