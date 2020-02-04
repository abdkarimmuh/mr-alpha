import strings from '@app/assets/strings';
import { Text } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import React, { PureComponent } from 'react';
import { SafeAreaView } from 'react-native';

const data = {
	id: 1,
	sender: 'Timses',
	date: '19 Januari 2020',
	message: strings.LOREMIPSUM,
};

class DetailMessageScreen extends PureComponent {
	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<LayoutAppbar title="Detail Pesan" hasBack>
					<Text bold>{data.sender}</Text>
					<Text style={{ marginBottom: 20 }}>{data.date}</Text>
					<Text>{data.message}</Text>
				</LayoutAppbar>
			</SafeAreaView>
		);
	}
}

export default DetailMessageScreen;
