import React, { PureComponent } from 'react';
import { View, SafeAreaView, Text } from 'react-native';

type Props = {};

class ProfilScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<View>
					<Text>Ini Profil Screen</Text>
				</View>
			</SafeAreaView>
		);
	}
}

export default ProfilScreen;
