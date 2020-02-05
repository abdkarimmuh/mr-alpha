import React, { PureComponent } from 'react';
import { SafeAreaView } from 'react-native';
import { SceneMap } from 'react-native-tab-view';
import { LayoutAppbar, LayoutAppbarTab } from '@app/containers';
import InboxContainer from './containers/InboxContainer';
import OutboxContainer from './containers/OutboxContainer';

type Props = {};

const renderScene = SceneMap({
	indox: InboxContainer,
	outbbox: OutboxContainer,
});

const route = [
	{ key: 'indox', title: 'Pesan Masuk' },
	{ key: 'outbbox', title: 'Pesan Keluar' },
];

class MessageScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			isRelawan: false,
		};
	}

	componentDidMount() { }

	render() {
		const { index, isRelawan } = this.state;
		const RenderRelawan = () => (
			<LayoutAppbar title="Pesan" hasBack>
				<InboxContainer />
			</LayoutAppbar>
		);
		const RenderKoordinator = () => (
			<LayoutAppbarTab
				title="Pesan"
				hasBack
				index={index}
				routes={route}
				renderScene={renderScene}
				onIndexChange={value => this.setState({ index: value })}
			/>
		);
		//TODO:Memory Leak Warning
		return (
			<SafeAreaView style={{ flex: 1 }}>
				{isRelawan ? <RenderRelawan /> : <RenderKoordinator />}
			</SafeAreaView>
		);
	}
}

export default MessageScreen;
