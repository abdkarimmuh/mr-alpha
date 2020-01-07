import React, { PureComponent } from 'react';
import { ScrollView, SafeAreaView, Text, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { Metrics } from '@app/themes';
import MenuContainer from './container/MenuContainer';
import NewsContainer from './container/NewsContainer';

type Props = {};

class HomeScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	render() {
		console.log(Metrics.DEVICE_WIDTH);
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<ScrollView>
					<Swiper
						height={Metrics.HeightCarousel}
						autoplay={true}
						showsPagination={true}
					>
						<View style={styles.content}>
							<Text style={styles.text}>Hello Swiper</Text>
						</View>
						<View style={styles.content}>
							<Text style={styles.text}>Beautiful</Text>
						</View>
						<View style={styles.content}>
							<Text style={styles.text}>And simple</Text>
						</View>
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
	sliderContainer: { height: '25%' },
	content: {
		flex: 1,
		backgroundColor: '#9DD6EB',
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	},
});
