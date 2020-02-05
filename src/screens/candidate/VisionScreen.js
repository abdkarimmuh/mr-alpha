import Images from '@app/assets/images';
import Strings from '@app/assets/strings';
import { Text } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import { Metrics } from '@app/themes';
import React, { PureComponent } from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import Styles from '@app/assets/styles';

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
					style={{ padding: 0 }}
				>
					<ScrollView>
						<Image
							source={Images.dummy_anis_sandi.header}
							style={{
								height: Metrics.HeightCarousel,
								width: Metrics.DEVICE_WIDTH,
								resizeMode: 'cover',
							}}
						/>
						<View style={Styles.backgroundDefault}>
							<Text
								medium
								bold
								style={{ textAlign: 'center', marginBottom: 12 }}
							>
								Visi
							</Text>
							<Text tiny style={{ textAlign: 'center', marginBottom: 48 }}>
								{vision.visi}
							</Text>

							<Text
								medium
								bold
								style={{ textAlign: 'center', marginBottom: 12 }}
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
