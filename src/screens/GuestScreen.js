import images from '@app/assets/images';
import { BannerCarousel, FloatingButton, Text } from '@app/components';
import { NewsContainer } from '@app/containers';
import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import metrics from '~/themes/metrics';

const dWidth = metrics.DEVICE_WIDTH - 32;

const data = {
	position: 'Calon Gubernur dan Wakil Gubernur DKI Jakarta',
	title: 'Anies - Sandi',
};

const styles = StyleSheet.create({
	profileContainer: {
		flexDirection: 'row',
		marginBottom: 20,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	imageSize: {
		height: 0.25 * dWidth,
		width: 0.25 * dWidth,
		resizeMode: 'contain',
	},
});

class GuestScreen extends Component {
	render() {
		return (
			<View>
				<ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
					<BannerCarousel />

					<View style={{ padding: 16 }}>
						<View style={styles.profileContainer}>
							<View>
								<Image
									source={images.dummy.oneToOne}
									style={styles.imageSize}
								/>
							</View>

							<View
								style={{
									justifyContent: 'center',
									width: 0.7 * dWidth,
								}}
							>
								<Text tiny caption style={{ flexWrap: 'wrap' }}>
									{data.position}
								</Text>
								<Text bold title style={{ flexWrap: 'wrap' }}>
									{data.title}
								</Text>
							</View>
						</View>

						<NewsContainer />
					</View>
				</ScrollView>

				<FloatingButton onPress={() => console.log('uwuw')} label="LOGIN" />
			</View>
		);
	}
}

export default GuestScreen;
