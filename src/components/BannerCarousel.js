import { Text } from '@app/components';
import { Metrics } from '@app/themes';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';

const banner = [
	{ id: '1', url: 'Banner 1' },
	{ id: '2', url: 'Banner 2' },
	{ id: '3', url: 'Banner 3' },
];

const BannerCarousel = () => (
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
);

export default BannerCarousel;

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
