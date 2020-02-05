import colors from '@app/assets/colors';
import Styles from '@app/assets/styles';
import { Avatar, List, Text } from '@app/components';
import { Metrics } from '@app/themes';
import React, { PureComponent } from 'react';
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { LayoutAppbar } from '@app/containers';
import NavigationServices from '@app/services/NavigationServices';

type Props = {};

const profileData = {
	name: 'Anies - Sandi',
	detail: [
		{
			name: 'Anies Baswedan',
			cadidate: 'Calon Gubernur DKI Jakarta',
		},
		{
			name: 'Sandiaga Uno',
			cadidate: 'Calon Wakil Gubernur DKI Jakarta',
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

	componentDidMount() {}

	render() {
		const { banner } = this.state;
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<LayoutAppbar title="Profil Calon" hasBack style={{ padding: 0 }}>
					<ScrollView>
						<Swiper
							height={Metrics.HeightCarousel}
							autoplay={true}
							showsPagination={true}
						>
							{banner.map(item => (
								<View key={item.id} style={styles.content}>
									<Text style={styles.text}>{item.url}</Text>
								</View>
							))}
						</Swiper>
						<View style={{ margin: 16 }}>
							<Text caption>Lihat Visi Misi</Text>
							<Text title>{profileData.name}</Text>

							<TouchableWithoutFeedback
								onPress={() => NavigationServices.navigate('Vision')}
							>
								<View
									style={{
										backgroundColor: colors.primaryColor,
										padding: 16,
										alignItems: 'center',
										marginVertical: 16,
									}}
								>
									<Text white>VISI / MISI</Text>
									<Text white medium bold>
										{profileData.name}
									</Text>
								</View>
							</TouchableWithoutFeedback>

							<Text caption>Lihat Profil</Text>
							<Text title style={{ marginBottom: 8 }}>
								{profileData.name}
							</Text>

							{profileData.detail.map(item => (
								<List.Item
									key={item.name}
									title={`Profil ${item.name}`}
									description={item.cadidate}
									left={() => <Avatar.Text label="XD" />}
									style={[
										Styles.shadowOn,
										{ backgroundColor: 'white', marginVertical: 8 },
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
