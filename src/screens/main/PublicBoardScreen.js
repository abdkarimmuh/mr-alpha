import React, { PureComponent } from 'react';
import { SafeAreaView } from 'react-native';
import { Appbar } from '@app/components';
import Colors from '@app/assets/colors';

type Props = {};

class PublicBoardScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<Appbar.Header style={{ backgroundColor: Colors.white }}>
					<Appbar.Content title="Public Board" color={Colors.black4A} />
				</Appbar.Header>
			</SafeAreaView>
		);
	}
}

export default PublicBoardScreen;
