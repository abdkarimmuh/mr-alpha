import React, { PureComponent } from 'react';
import { SafeAreaView } from 'react-native';
import { SceneMap } from 'react-native-tab-view';

import { LayoutAppbarTab } from '@app/containers';

import FlayerContainer from './containers/FlayerContainer';
import VideoContainer from './containers/VideoContainer';

type Props = {};

const renderScene = SceneMap({
	flayer: FlayerContainer,
	video: VideoContainer,
});

class MediaScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			routes: [
				{ key: 'flayer', title: 'Flayer' },
				{ key: 'video', title: 'Video' },
			],
		};
	}

	componentDidMount() {}

	render() {
		const { index, routes } = this.state;
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<LayoutAppbarTab
					title="Media"
					index={index}
					routes={routes}
					renderScene={renderScene}
					hasBack
					onIndexChange={value => this.setState({ index: value })}
				/>
			</SafeAreaView>
		);
	}
}

export default MediaScreen;
