import { LayoutAppbarTab } from '@app/containers';
import React, { PureComponent } from 'react';
import { SafeAreaView } from 'react-native';
import { SceneMap } from 'react-native-tab-view';
import RelawanAktifContainer from './containers/RelawanAktifContainer';
import RelawanPasifContainer from './containers/RelawanPasifContainer';
import NavigationServices from '@app/services/NavigationServices';

const navigateToAddPendukung = () =>
	NavigationServices.navigate('AddPendukung');

type Props = {};

const renderScene = SceneMap({
	active: RelawanAktifContainer,
	pasive: RelawanPasifContainer,
});

class AfiliasiScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			routes: [
				{ key: 'active', title: 'Relawan' },
				{ key: 'pasive', title: 'Pendukung' },
			],
		};
	}

	componentDidMount() {}

	render() {
		const { index, routes } = this.state;
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<LayoutAppbarTab
					title="Afiliasi"
					icon={index !== 0 ? 'plus' : 'chain'}
					onPress={index !== 0 ? navigateToAddPendukung : null}
					index={index}
					routes={routes}
					renderScene={renderScene}
					onIndexChange={value => this.setState({ index: value })}
					hasMessage
				/>
			</SafeAreaView>
		);
	}
}

export default AfiliasiScreen;
