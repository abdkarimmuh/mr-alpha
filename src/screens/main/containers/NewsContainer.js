import React, { useState, useEffect } from 'react';
import { Text, Card, Paragraph, Button } from '@app/components';
import { View, StyleSheet } from 'react-native';
import Styles from '@app/assets/styles';
import Colors from '@app/assets/colors';

const Data = [
	{ id: '1', title: 'Judul Berita 1', description: 'Ini Deskripsi Berita 1' },
	{ id: '2', title: 'Judul Berita 2', description: 'Ini Deskripsi Berita 2' },
	{ id: '3', title: 'Judul Berita 3', description: 'Ini Deskripsi Berita 3' },
	{ id: '4', title: 'Judul Berita 4', description: 'Ini Deskripsi Berita 4' },
];

const CardMenu = ({ title, description, link }) => (
	<Card style={styles.cardContainer}>
		<Card.Title title={title} titleStyle={Styles.font} />
		<Card.Content style={{ flex: 1 }}>
			<Paragraph style={Styles.font}>{description}</Paragraph>
		</Card.Content>
		<Card.Actions style={{ justifyContent: 'flex-end' }}>
			<Button
				labelStyle={[Styles.font, { color: Colors.primaryColor }]}
				onPress={() => console.log('PRESS')}
			>
				Selengkapnya
			</Button>
		</Card.Actions>
	</Card>
);

const NewsContainer = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(Data);
	}, []);

	return (
		<View
			style={{
				flexDirection: 'column',
				marginHorizontal: 16,
				marginVertical: 16,
			}}
		>
			<Text style={{ fontWeight: 'bold', marginBottom: 16 }}>
				Berita Terbaru
			</Text>
			{data.map(item => (
				<CardMenu
					key={item.id}
					title={item.title}
					description={item.description}
				/>
			))}
			<Button
				onPress={() => console.log('PRESS')}
				uppercase={false}
				labelStyle={[Styles.font, { color: Colors.primaryColor }]}
			>
				Lihat Berita Lainnya
			</Button>
		</View>
	);
};

export default NewsContainer;

const styles = StyleSheet.create({
	container: { flexDirection: 'column', margin: 16 },
	title: { textAlign: 'center', marginTop: 8 },
	cardContainer: { flex: 1, marginVertical: 16 },
});
