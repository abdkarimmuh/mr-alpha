import { Text } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import React, { PureComponent } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import colors from '@app/assets/colors';
import strings from '@app/assets/strings';
import { NavigationServices } from '@app/services';

const navigateToDetail = () => NavigationServices.navigate('DetailMessage');

const data = [
	{
		id: 1,
		sender: 'Timses',
		date: '19 Januari 2020',
		message: strings.LOREMIPSUM,
	},
	{
		id: 2,
		sender: 'Timses',
		date: '19 Januari 2020',
		message: strings.LOREMIPSUM,
	},
];

type Props = {};

class MessageScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			isRelawan: false,
		};
	}

	componentDidMount() {}

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<LayoutAppbar title="Pesan" hasBack>
					{data.map(item => (
						<TouchableOpacity
							onPress={navigateToDetail}
							key={item.id}
							style={{
								paddingVertical: 16,
								borderBottomWidth: 1,
								borderBottomColor: colors.borderGrey,
							}}
						>
							<Text>
								<Text tiny bold>
									{item.sender},{' '}
								</Text>
								<Text tiny>{item.date}</Text>
							</Text>
							<Text numberOfLines={2}>{item.message}</Text>
						</TouchableOpacity>
					))}
				</LayoutAppbar>
			</SafeAreaView>
		);
	}
}

export default MessageScreen;
