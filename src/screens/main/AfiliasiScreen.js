import React, { PureComponent } from 'react';
import { SafeAreaView } from 'react-native';
import { SceneMap } from 'react-native-tab-view';

import { LayoutAppbarTab } from '@app/containers';

import RelawanAktifContainer from './containers/RelawanAktifContainer';
import RelawanPasifContainer from './containers/RelawanPasifContainer';

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
				{ key: 'active', title: 'Relawan Aktif' },
				{ key: 'pasive', title: 'Relawan Pasif' },
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
					index={index}
					routes={routes}
					renderScene={renderScene}
					onIndexChange={value => this.setState({ index: value })}
				/>
			</SafeAreaView>
		);
	}
}

export default AfiliasiScreen;
