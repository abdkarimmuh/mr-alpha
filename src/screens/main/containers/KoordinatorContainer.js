import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import TreeView from 'react-native-final-tree-view';
import { ScrollView } from 'react-native-gesture-handler';

const Data = [
	{
		id: 'Grandparent',
		name: 'Grandpa',
		age: 78,
		children: [
			{
				id: 'Me',
				name: 'Me',
				age: 30,
				children: [
					{
						id: 'Erick',
						name: 'Erick',
						age: 10,
					},
					{
						id: 'Rose',
						name: 'Rose',
						age: 12,
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

	const getIndicator = (isExpanded, hasChildrenNodes) => {
		if (!hasChildrenNodes) {
			return '-';
		} else if (isExpanded) {
			return '\\/';
		} else {
			return '>';
		}
	};

	return (
		<ScrollView contentContainerStyle={{ padding: 16 }}>
			<TreeView
				data={data}
				renderNode={({ node, level, isExpanded, hasChildrenNodes }) => (
					<View>
						<Text
							style={{
								marginLeft: 25 * level,
							}}
						>
							{getIndicator(isExpanded, hasChildrenNodes)} {node.name}
						</Text>
					</View>
				)}
			/>
		</ScrollView>
	);
};

export default KoordinatorContainer;
