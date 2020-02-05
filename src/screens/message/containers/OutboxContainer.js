import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { FAB } from '@app/components';
import Item from './components/Item';
import strings from '@app/assets/strings';
import colors from '@app/assets/colors';
import { NavigationServices } from '@app/services';

const Data = [
	{
		id: ' 1',
		date: '19 Januari 2020',
		message: strings.LOREMIPSUM,
	},
	{
		id: '2',
		date: '19 Januari 2020',
		message: strings.LOREMIPSUM,
	}
];

const OutboxContainer = () => {
	const [data, setData] = useState([]);
	const [count, setCount] = useState(0);

	useEffect(() => {
		setData(Data);
		setCount(Data.length);
	}, [count]);

	return (
		<>
			<FlatList
				data={data}
				contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 24 }}
				renderItem={({ item }) => (
					<Item id={item.id} date={item.date} message={item.message} />
				)}
				keyExtractor={item => item.id}
			/>
			<FAB
				style={{
					position: 'absolute',
					margin: 32,
					right: 0,
					bottom: 0,
					backgroundColor: colors.primaryColor,
				}}
				small
				icon="plus"
				color={colors.white}
				onPress={() => NavigationServices.navigate('NewMessage')}
			/>
		</>
	);
};

export default OutboxContainer;
