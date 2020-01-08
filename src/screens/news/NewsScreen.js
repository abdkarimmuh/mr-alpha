import React, { PureComponent } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { CardNews } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import { NavigationServices } from '@app/services';

type Props = {};

const Data = [
	{ id: '1', title: 'Judul Berita 1', description: 'Ini Deskripsi Berita 1' },
	{ id: '2', title: 'Judul Berita 2', description: 'Ini Deskripsi Berita 2' },
	{ id: '3', title: 'Judul Berita 3', description: 'Ini Deskripsi Berita 3' },
	{ id: '4', title: 'Judul Berita 4', description: 'Ini Deskripsi Berita 4' },
	{ id: '5', title: 'Judul Berita 1', description: 'Ini Deskripsi Berita 1' },
	{ id: '6', title: 'Judul Berita 2', description: 'Ini Deskripsi Berita 2' },
	{ id: '7', title: 'Judul Berita 3', description: 'Ini Deskripsi Berita 3' },
	{ id: '8', title: 'Judul Berita 4', description: 'Ini Deskripsi Berita 4' },
	{ id: '9', title: 'Judul Berita 1', description: 'Ini Deskripsi Berita 1' },
	{ id: '10', title: 'Judul Berita 2', description: 'Ini Deskripsi Berita 2' },
	{ id: '11', title: 'Judul Berita 3', description: 'Ini Deskripsi Berita 3' },
	{ id: '12', title: 'Judul Berita 4', description: 'Ini Deskripsi Berita 4' },
];

class NewsScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<LayoutAppbar
					title="Berita"
					onBackPress={() => NavigationServices.goBack()}
					style={{ padding: 0, paddingBottom: 64 }}
				>
					<FlatList
						data={Data}
						renderItem={({ item }) => (
							<CardNews
								title={item.title}
								description={item.description}
								link={item.link}
							/>
						)}
						keyExtractor={item => item.id}
						contentContainerStyle={{ padding: 24 }}
					/>
				</LayoutAppbar>
			</SafeAreaView>
		);
	}
}

export default NewsScreen;