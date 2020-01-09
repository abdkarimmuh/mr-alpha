import React, { PureComponent } from 'react';
import { SafeAreaView } from 'react-native';

import { LayoutAppbar } from '@app/containers';
import { Text } from '@app/components';

type Props = {};

class MessageScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<LayoutAppbar title="Message" hasBack>
					<Text>Ini screen Message</Text>
				</LayoutAppbar>
			</SafeAreaView>
		);
	}
}

export default MessageScreen;
