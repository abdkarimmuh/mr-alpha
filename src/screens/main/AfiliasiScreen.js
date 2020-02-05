import React, { PureComponent } from 'react';
import { LayoutAppbarTab } from '@app/containers';
import { SafeAreaView } from 'react-native';
import { SceneMap } from 'react-native-tab-view';
import RelawanContainer from './containers/RelawanContainer';
import PendukungContainer from './containers/PendukungContainer';
import KoordinatorContainer from './containers/KoordinatorContainer';
import NavigationServices from '@app/services/NavigationServices';

const navigateToAddPendukung = () =>
	NavigationServices.navigate('AddPendukung');

type Props = {};

const renderSceneRelawan = SceneMap({
	relawan: RelawanContainer,
	pendukung: PendukungContainer,
});

const renderSceneKoordinator = SceneMap({
	koordinator: KoordinatorContainer,
	relawan: RelawanContainer,
	pendukung: PendukungContainer,
});

const routeRelawan = [
	{ key: 'relawan', title: 'Relawan' },
	{ key: 'pendukung', title: 'Pendukung' },
];

const routeKoordinator = [
	{ key: 'koordinator', title: 'Koordinator' },
	{ key: 'relawan', title: 'Relawan' },
	{ key: 'pendukung', title: 'Pendukung' },
];

class AfiliasiScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			isRelawan: false,
		};
	}

	componentDidMount() {}

	render() {
		const { index, isRelawan } = this.state;
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<LayoutAppbarTab
					title="Afiliasi"
					icon={index === 2 ? 'plus' : index === 1 ? 'chain' : null}
					onPress={index !== 0 ? navigateToAddPendukung : null}
					index={index}
					routes={isRelawan ? routeRelawan : routeKoordinator}
					renderScene={isRelawan ? renderSceneRelawan : renderSceneKoordinator}
					onIndexChange={value => this.setState({ index: value })}
					hasMessage
				/>
			</SafeAreaView>
		);
	}
}

export default AfiliasiScreen;
