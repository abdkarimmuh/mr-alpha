import Api from '@app/api/Api';
import Config from '@app/api/Config';
import Images from '@app/assets/images';
import React, { useEffect, useState } from 'react';
import TreeView from 'react-native-final-tree-view';
import { ScrollView } from 'react-native-gesture-handler';
import Styles from '~/assets/styles';
import Item from './components/Item';

const Data = [
	{
		id: '1',
		name: 'Grandpa',
		photo: Images.dummy_anis_sandi.profile,
		children: [
			{
				id: '2',
				name: 'Me',
				photo: Images.dummy_anis_sandi.profile1,
				children: [
					{
						id: '3',
						name: 'Erick',
						photo: Images.icon.checkmark,
					},
					{
						id: '4',
						name: 'Rose',
						photo: Images.icon.checkmark,
					},
				],
			},
			{
				id: '5',
				name: 'Budi',
				photo: Images.dummy_anis_sandi.profile,
				children: [
					{
						id: '6',
						name: 'Budi',
						photo: Images.icon.checkmark,
						children: [
							{
								id: '8',
								name: 'Nino',
								photo: Images.icon.checkmark,
							},
							{
								id: '9',
								name: 'Hakim',
								photo: Images.icon.checkmark,
							},
						],
					},
					{
						id: '7',
						name: 'Oki',
						photo: Images.icon.checkmark,
					},
				],
			},
		],
	},
];

const KoordinatorContainer = () => {
	const [data, setData] = useState([]);
	const [count, setCount] = useState(0);

	async function getRelawan() {
		let res;

		res = await Api(Config.baseUrlTree)
			.get()
			.treeRelawan();

		console.log(res.data);
		setData(res.data);
	}

	useEffect(() => {
		setData(Data);
		setCount(0);
		// getRelawan();
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
				getCollapsedNodeHeight={({ value, level }) => (level > 1 ? 20 : 40)}
			/>
		</ScrollView>
	);
};

export default KoordinatorContainer;
