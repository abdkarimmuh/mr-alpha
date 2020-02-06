import images from '@app/assets/images';
import { BannerCarousel, FloatingButton, Text } from '@app/components';
import { NewsContainer } from '@app/containers';
import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import metrics from '@app/themes/metrics';
import { NavigationServices } from '@app/services';
import Styles from '@app/assets/styles';

const dWidth = metrics.DEVICE_WIDTH;

const data = {
	position: 'Calon Gubernur dan Wakil Gubernur DKI Jakarta',
	title: 'Anies - Sandi',
};

const styles = StyleSheet.create({
	profileContainer: {
		flexDirection: 'row',
		marginBottom: 20,
		alignItems: 'center',
	},
	imageSize: {
		height: 80,
		width: 80,
		resizeMode: 'contain',
	},
});

class GuestScreen extends Component {
	render() {
		return (
			<View>
				<ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
					<BannerCarousel />
					<View style={Styles.backgroundDefault}>
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
									paddingLeft: 24,
									width: dWidth - 80 - 24 - 48,
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
				<FloatingButton
					onPress={() => NavigationServices.navigate('Auth')}
					label="LOGIN"
				/>
			</View>
		);
	}
}

export default GuestScreen;
