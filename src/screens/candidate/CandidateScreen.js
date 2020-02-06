import React, { PureComponent } from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import Images from '@app/assets/images';
import Strings from '@app/assets/strings';
import Styles from '@app/assets/styles';
import { Text, Card, Surface } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import { Metrics } from '@app/themes';

type Props = {};

const profile = {
	name: 'Chairil Hilman Syah',
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
					isScrolling={false}
				>
					<ScrollView>
						<Image
							source={Images.dummy_anis_sandi.header}
							style={{
								height: 200,
								width: Metrics.DEVICE_WIDTH,
								resizeMode: 'cover',
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
						<Surface style={[Styles.containerProfileCandidate, { marginLeft: 24 }]}>
							<Image source={Images.dummy_anis_sandi.profile} style={Styles.profileCandidate} />
						</Surface>
						<View style={Styles.backgroundDefault}>
							<Text title>{profile.name}</Text>
							<Text caption style={{ marginBottom: 24 }}>
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
