import { LayoutAppbar } from '@app/containers';
import React, { PureComponent } from 'react';
import ChartContainer from './containers/ChartContainer';
import { View, TouchableOpacity, Image } from 'react-native';
import Images from '@app/assets/images';
import { Text } from '@app/components';
import Styles from '@app/assets/styles';
import Color from '@app/assets/colors';

const data = [
	{
		title: 'Ubah Visi Misi',
		background: Color.primaryColor,
		image: Images.icon.cameraWhite,
		nav: 'ChangeVision',
	},
	{
		title: 'Ubah Profil Calon Gubernur',
		background: Color.white,
		image: Images.icon.mainProfile,
		nav: 'ChangeCandidate',
	},
	{
		title: 'Ubah Profile Calon Wakil Gubernur',
		background: Color.white,
		image: Images.icon.people,
		nav: 'ChangeViceCandidate',
	},
	{
		title: 'Tulis Berita',
		background: Color.black4A,
		image: Images.icon.mainNews,
		nav: 'AddNews',
	},
	{
		title: 'Upload Gambar',
		background: Color.black4A,
		image: Images.icon.mainMedia,
		nav: 'AddImages',
	},
	{
		title: 'Upload Video',
		background: Color.black4A,
		image: Images.icon.cameraWhite,
		nav: 'AddVideo',
	},
];

class TimsesScreen extends PureComponent {
	render() {
		return (
			<LayoutAppbar title="Panel Timses">
				<ChartContainer />

				{data.map(item => (
					<TouchableOpacity
						key={item.title}
						style={{
							marginVertical: 8,
							flexDirection: 'row',
							alignItems: 'center',
							flexWrap: 'wrap',
						}}
					>
						<View
							style={[
								Styles.shadowOn,
								{
									backgroundColor: item.background,
									height: 48,
									width: 48,
									alignItems: 'center',
									justifyContent: 'center',
									marginRight: 16,
									borderRadius: 2,
								},
							]}
						>
							<Image source={item.image} style={{ width: 32, height: 32 }} />
						</View>
						<Text numberOfLines={1}>{item.title}</Text>
					</TouchableOpacity>
				))}
			</LayoutAppbar>
		);
	}
}

export default TimsesScreen;
