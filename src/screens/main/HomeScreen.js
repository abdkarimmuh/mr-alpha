import { BannerCarousel } from '@app/components';
import { NewsContainer } from '@app/containers';
import { Metrics } from '@app/themes';
import React, { PureComponent } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import MenuContainer from './containers/MenuContainer';

type Props = {};

class HomeScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			banner: [],
		};
	}

	componentDidMount() {}

	render() {
		console.log(Metrics.DEVICE_WIDTH);
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<ScrollView>
					<BannerCarousel />

					<View style={{ padding: 16 }}>
						<MenuContainer />
						<NewsContainer />
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}

export default HomeScreen;
