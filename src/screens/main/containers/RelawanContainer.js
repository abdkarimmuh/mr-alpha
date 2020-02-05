import React, { useState, useEffect } from 'react';
import List from './components/List';

const Data = [
	{ id: '1', name: 'Budi' },
	{ id: '2', name: 'Andi' },
	{ id: '3', name: 'Setyo' },
	{ id: '4', name: 'Budi' },
	{ id: '5', name: 'Andi' },
	{ id: '6', name: 'Setyo' },
	{ id: '7', name: 'Budi' },
	{ id: '8', name: 'Andi' },
	{ id: '9', name: 'Setyo' },
];

const RelawanContainer = () => {
	const [data, setData] = useState([]);
	const [count, setCount] = useState(0);

	useEffect(() => {
		setData(Data);
		setCount(Data.length);
	}, [count]);

	return <List title="Total Relawan" data={data} count={count} />;
};

export default RelawanContainer;
