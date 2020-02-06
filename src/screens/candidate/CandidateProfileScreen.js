import colors from '@app/assets/colors';
import Styles from '@app/assets/styles';
import { Avatar, List, Text, Surface } from '@app/components';
import { Metrics } from '@app/themes';
import React, { PureComponent } from 'react';
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
	Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import { LayoutAppbar } from '@app/containers';
import NavigationServices from '@app/services/NavigationServices';
import Images from '@app/assets/images';

type Props = {};

const profileData = {
	name: 'Anies - Sandi',
	detail: [
		{
			name: 'Chairil Hilman Syah',
			cadidate: 'Calon Gubernur DKI Jakarta',
			image: Images.dummy_anis_sandi.profile1
		},
		{
			name: 'Aditya Fitriadi',
			cadidate: 'Calon Wakil Gubernur DKI Jakarta',
			image: Images.dummy_anis_sandi.profile2
		},
	],
};

class CandidateProfileScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			banner: [
				{ id: '1', url: 'Banner 1' },
				{ id: '2', url: 'Banner 2' },
				{ id: '3', url: 'Banner 3' },
			],
		};
	}

	componentDidMount() { }

	render() {
		// const { banner } = this.state;
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<LayoutAppbar title="Profil Calon" hasBack isScrolling={false}>
					<ScrollView>
						{/* <Swiper
							height={Metrics.HeightCarousel}
							autoplay={true}
							showsPagination={true}
						>
							{banner.map(item => (
								<View key={item.id} style={styles.content}>
									<Text style={styles.text}>{item.url}</Text>
								</View>
							))}
						</Swiper> */}
						<Image source={Images.dummy_anis_sandi.header} style={{ width: '100%', height: 200, resizeMode: 'cover' }} />
						<Surface style={[Styles.containerProfileCandidate, { alignSelf: 'center' }]}>
							<Image source={Images.dummy_anis_sandi.profile} style={Styles.profileCandidate} />
						</Surface>
						<View style={Styles.backgroundDefault}>
							<Text caption>Lihat Visi Misi</Text>
							<Text title>{profileData.name}</Text>
							<TouchableWithoutFeedback
								onPress={() => NavigationServices.navigate('Vision')}
							>
								<View
									style={{
										backgroundColor: colors.primaryColor,
										padding: 24,
										alignItems: 'center',
										marginVertical: 24,
									}}
								>
									<Text white>VISI / MISI</Text>
									<Text white medium bold>
										{profileData.name}
									</Text>
								</View>
							</TouchableWithoutFeedback>

							<Text caption style={{ marginTop: 12 }}>Lihat Profil</Text>
							<Text title bold>
								{profileData.name}
							</Text>

							{profileData.detail.map(item => (
								<List.Item
									key={item.name}
									title={`Profil ${item.name}`}
									description={item.cadidate}
									left={() => <Image source={item.image} style={{ width: 64, height: 64, resizeMode: 'cover', borderRadius: 32, marginRight: 8 }} />}
									style={[
										Styles.shadowOn,
										{ backgroundColor: 'white', marginTop: 24, padding: 16 },
									]}
									onPress={() => NavigationServices.navigate('Candidate')}
								/>
							))}
						</View>
					</ScrollView>
				</LayoutAppbar>
			</SafeAreaView>
		);
	}
}

export default CandidateProfileScreen;

const styles = StyleSheet.create({
	content: {
		flex: 1,
		backgroundColor: '#9DD6EB',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	},
});
