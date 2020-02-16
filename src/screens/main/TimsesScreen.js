import Color from '@app/assets/colors';
import Images from '@app/assets/images';
import Styles from '@app/assets/styles';
import { Text } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import React, { PureComponent } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import ChartContainer from './containers/ChartContainer';
import { NavigationServices } from '@app/services';

const data = [
	{
		title: 'Ubah Visi Misi',
		background: Color.primaryColor,
		image: Images.icon.checkmarkWhite,
		nav: 'ChangeVision',
	},
	{
		title: 'Ubah Profil Calon Gubernur',
		background: Color.white,
		image: Images.icon.mainProfile,
		nav: 'ChangeCandidate',
	},
	{
		title: 'Ubah Profil Calon Wakil Gubernur',
		background: Color.white,
		image: Images.icon.people,
		nav: 'ChangeVice',
	},
	{
		title: 'Tulis Berita',
		background: Color.black4A,
		image: Images.icon.bookOpenWhite,
		nav: 'AddNews',
	},
	{
		title: 'Upload Gambar',
		background: Color.black4A,
		image: Images.icon.imageWhite,
		nav: 'AddImages',
	},
	{
		title: 'Upload Video',
		background: Color.black4A,
		image: Images.icon.playCircleWhite,
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
						onPress={() => NavigationServices.navigate(item.nav)}
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
