import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from '@app/components';
import colors from '@app/assets/colors';
import { NavigationServices } from '@app/services';

const Item = ({ id, sender = null, date, message }) => (
	<TouchableOpacity
		onPress={() => NavigationServices.navigate('DetailMessage')}
		key={id}
		style={{
			marginTop: 24,
			borderBottomWidth: 1,
			borderBottomColor: colors.borderGrey,
		}}
	>
		<View style={{ flexDirection: 'row', marginBottom: 8 }}>
			{sender !== null && (
				<Text tiny bold style={{ marginRight: 4 }}>
					{sender},
				</Text>
			)}
			<Text tiny>{date}</Text>
		</View>
		<Text numberOfLines={2} style={{ paddingBottom: 8 }}>{message}</Text>
	</TouchableOpacity>
);

export default Item;
