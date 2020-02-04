import React, { PureComponent } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { BannerCarousel } from '@app/components';
import { NewsContainer } from '@app/containers';
import { Metrics } from '@app/themes';
import MenuContainer from './containers/MenuContainer';
import Styles from '@app/assets/styles';

type Props = {};

class HomeScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			banner: [],
		};
	}

	componentDidMount() { }

	render() {
		console.log(Metrics.DEVICE_WIDTH);
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<ScrollView>
					<BannerCarousel />
					<MenuContainer />
					<View style={Styles.backgroundDefault}>
						<NewsContainer />
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}

export default HomeScreen;
