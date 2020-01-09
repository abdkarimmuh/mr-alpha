import React, { PureComponent } from 'react';
import { ScrollView, SafeAreaView, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';

import { Text } from '@app/components';
import { Metrics } from '@app/themes';

import MenuContainer from './containers/MenuContainer';
import NewsContainer from './containers/NewsContainer';

type Props = {};

class HomeScreen extends PureComponent<Props> {
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
		console.log(Metrics.DEVICE_WIDTH);
		return (
			<SafeAreaView style={{ flex: 1 }}>
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
					<View style={{ marginHorizontal: 8 }}>
						<MenuContainer />
						<NewsContainer />
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}

export default HomeScreen;

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
