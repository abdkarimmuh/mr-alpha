import images from '@app/assets/images';
import styles from '@app/assets/styles';
import { Text } from '@app/components';
import { Metrics } from '@app/themes';
import React, { PureComponent } from 'react';
import { Image, ScrollView, View } from 'react-native';

const data = [
	{
		id: 1,
		title: 'Ayo Tonton Debat Cagub Cawagub DKI di Saluran',
		video: images.dummy.sixteenToNine,
	},
	{
		id: 2,
		title: 'Ayo Tonton Debat Cagub Cawagub DKI',
		video: images.dummy.sixteenToNine,
	},
];

class VideoContainer extends PureComponent {
	render() {
		return (
			<ScrollView contentContainerStyle={{ padding: 20 }}>
				{data.map(item => (
					<View
						key={item.id}
						style={[
							styles.shadowOn,
							{ backgroundColor: 'white', marginBottom: 20 },
						]}
					>
						<Text numberOfLines={1} bold style={{ margin: 16 }}>
							{item.title}
						</Text>
						<Image
							source={images.dummy.sixteenToNine}
							style={{
								resizeMode: 'contain',
								width: Metrics.DEVICE_WIDTH - 40,
								height: ((Metrics.DEVICE_WIDTH - 40) * 9) / 16,
							}}
						/>
					</View>
				))}
			</ScrollView>
		);
	}
}

export default VideoContainer;
