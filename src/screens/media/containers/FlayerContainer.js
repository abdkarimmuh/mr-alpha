import images from '@app/assets/images';
import styles from '@app/assets/styles';
import { Text } from '@app/components';
import { Metrics } from '@app/themes';
import React, { Component } from 'react';
import { Image, ScrollView, View } from 'react-native';

const data = [
	{
		id: 1,
		title: 'Anies-Sandi',
		image: images.dummy.oneToOne,
	},
	{
		id: 2,
		title: 'Salam Sejahtera',
		image: images.dummy.oneToOne,
	},
];

class FlayerContainer extends Component {
	render() {
		return (
			<ScrollView
				contentContainerStyle={{ paddingVertical: 12, paddingHorizontal: 24 }}
			>
				{data.map(item => (
					<View
						key={item.id}
						style={[
							styles.shadowOn,
							{ backgroundColor: 'white', marginVertical: 12 },
						]}
					>
						<Text numberOfLines={1} bold style={{ margin: 16 }}>
							{item.title}
						</Text>
						<Image
							source={item.image}
							style={{
								width: Metrics.DEVICE_WIDTH - 48,
								height: Metrics.DEVICE_WIDTH - 48,
							}}
						/>
					</View>
				))}
			</ScrollView>
		);
	}
}

export default FlayerContainer;
