import React, { PureComponent } from 'react';
import { LayoutAppbarTab } from '@app/containers';
import { SafeAreaView } from 'react-native';
import { SceneMap } from 'react-native-tab-view';
import Share from 'react-native-share';
import RelawanContainer from './containers/RelawanContainer';
import PendukungContainer from './containers/PendukungContainer';
import KoordinatorContainer from './containers/KoordinatorContainer';
import NavigationServices from '@app/services/NavigationServices';
import Images from '@app/assets/images';

const navigateToAddPendukung = () =>
	NavigationServices.navigate('AddPendukung');

const ShareLink = () => {
	Share.open({
		title: 'Link App',
		message: 'https://play.google.com/store/apps/details?id=id.aksiloo',
		failOnCancel: false,
	});
};

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
					icon={
						index === 2
							? Images.icon.plus
							: index === 1
							? Images.icon.link
							: null
					}
					onPress={
						index === 2
							? navigateToAddPendukung
							: index === 1
							? ShareLink
							: null
					}
					// onPress={index !== 0 ? navigateToAddPendukung : null}
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
