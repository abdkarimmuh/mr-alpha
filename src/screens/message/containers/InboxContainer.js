import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Item from './components/Item';
import strings from '@app/assets/strings';

const Data = [
	{
		id: '1',
		sender: 'Timses',
		date: '19 Januari 2020',
		message: strings.LOREMIPSUM,
	},
	{
		id: '2',
		sender: 'Timses',
		date: '19 Januari 2020',
		message: strings.LOREMIPSUM,
	},
];

const InboxContainer = () => {
	const [data, setData] = useState([]);
	const [count, setCount] = useState(0);

	useEffect(() => {
		setData(Data);
		setCount(Data.length);
	}, [count]);

	return (
		<FlatList
			data={data}
			contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 24 }}
			renderItem={({ item }) => (
				<Item
					id={item.id}
					sender={item.sender}
					date={item.date}
					message={item.message}
				/>
			)}
			keyExtractor={item => item.id}
		/>
	);
};

export default InboxContainer;
