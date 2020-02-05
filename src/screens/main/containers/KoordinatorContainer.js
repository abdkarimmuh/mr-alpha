import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import TreeView from 'react-native-final-tree-view';
import { ScrollView } from 'react-native-gesture-handler';
import Item from './components/Item';
import Styles from '~/assets/styles';

const Data = [
	{
		id: '1',
		name: 'Grandpa',
		children: [
			{
				id: '2',
				name: 'Me',
				children: [
					{
						id: '3',
						name: 'Erick',
					},
					{
						id: '4',
						name: 'Rose',
					},
				],
			},
			{
				id: '5',
				name: 'Budi',
				children: [
					{
						id: '6',
						name: 'Budi',
						children: [
							{
								id: '8',
								name: 'Nino',
							},
							{
								id: '9',
								name: 'Hakim',
							},
						],
					},
					{
						id: '7',
						name: 'Oki',
					},
				],
			},
		],
	},
];

const KoordinatorContainer = () => {
	const [data, setData] = useState([]);
	const [count, setCount] = useState(0);

	useEffect(() => {
		setData(Data);
		setCount(0);
	}, [count]);

	return (
		<ScrollView contentContainerStyle={Styles.backgroundDefault}>
			<TreeView
				data={data}
				renderNode={({ node, level, isExpanded, hasChildrenNodes }) => (
					<Item
						hasChildrenNodes={hasChildrenNodes}
						isExpanded={isExpanded}
						level={level}
						node={node}
					/>
				)}
			/>
		</ScrollView>
	);
};

export default KoordinatorContainer;
