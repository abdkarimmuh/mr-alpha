import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';
import { CardNews } from '@app/components';
import { LayoutAppbar } from '@app/containers';

type Props = {};

const Data = [
	{
		id: '1',
		author: 'Budi',
		date: '2019/10/01 10:20:00',
		title: 'Judul Berita 1',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		id: '2',
		author: 'Budi',
		date: '2019/10/01 10:20:00',
		title: 'Judul Berita 2',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		id: '3',
		author: 'Budi',
		date: '2019/10/01 10:20:00',
		title: 'Judul Berita 3',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		id: '4',
		author: 'Budi',
		date: '2019/10/01 10:20:00',
		title: 'Judul Berita 4',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		id: '5',
		author: 'Budi',
		date: '2019/10/01 10:20:00',
		title: 'Judul Berita 4',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		id: '6',
		author: 'Budi',
		date: '2019/10/01 10:20:00',
		title: 'Judul Berita 4',
		description: 'Ini Deskripsi Berita',
	},
	{
		id: '7',
		author: 'Budi',
		date: '2019/10/01 10:20:00',
		title: 'Judul Berita 4',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		id: '8',
		author: 'Budi',
		date: '2019/10/01 10:20:00',
		title: 'Judul Berita 4',
		description: 'Ini Deskripsi Berita',
	},
	{
		id: '9',
		author: 'Budi',
		date: '2019/10/01 10:20:00',
		title: 'Judul Berita 4',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		id: '10',
		author: 'Budi',
		date: '2019/10/01 10:20:00',
		title: 'Judul Berita 4',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
];

class NewsScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	render() {
		return (
			<LayoutAppbar title="Berita" hasBack isScrolling={false}>
				<ScrollView
					contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 24 }}
				>
					{Data.map(item => (
						<CardNews
							title={item.title}
							description={item.description}
							link={item.link}
							data={item}
							key={item.id}
						/>
					))}
				</ScrollView>
			</LayoutAppbar>
		);
	}
}

export default NewsScreen;
