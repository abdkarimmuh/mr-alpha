import { Text } from '@app/components';
import { Metrics } from '@app/themes';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import Images from '@app/assets/images';

const banner = [
	{ id: '1', url: 'Banner 1', image: Images.dummy_anis_sandi.header },
	{ id: '2', url: 'Banner 2', image: Images.dummy_anis_sandi.header1 },
	{ id: '3', url: 'Banner 3', image: Images.dummy_anis_sandi.header2 },
];

const BannerCarousel = () => (
	<Swiper
		height={Metrics.HeightCarousel}
		autoplay={true}
		showsPagination={true}
	>
		{banner.map(item => (
			<View key={item.id} style={styles.content}>
				{/* <Text style={styles.text}>{item.url}</Text> */}
				<Image source={item.image} style={styles.image} />
			</View>
		))}
	</Swiper>
);

export default BannerCarousel;

const styles = StyleSheet.create({
	content: {
		flex: 1,
		backgroundColor: '#9DD6EB',
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		height: Metrics.HeightCarousel,
		width: Metrics.DEVICE_WIDTH,
		resizeMode: 'cover',
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	},
});
