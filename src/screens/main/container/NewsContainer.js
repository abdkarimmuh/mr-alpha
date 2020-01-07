import React from 'react';
import { Card, Paragraph, Button } from '@app/components';
import Color from '@app/assets/colors';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// 320

const CardMenu = ({ title, icon }) => (
	<Card style={styles.cardContainer}>
		<Card.Title title="Card Title" />
		<Card.Content style={{ flex: 1 }}>
			<Paragraph>Card content</Paragraph>
		</Card.Content>
		<TouchableOpacity>
			<Card.Actions style={{ justifyContent: 'flex-end' }}>
				<Button>Selengkapnya</Button>
			</Card.Actions>
		</TouchableOpacity>
	</Card>
);

const MenuContainer = () => (
	<View
		style={{
			flexDirection: 'column',
			marginHorizontal: 16,
			marginVertical: 16,
		}}
	>
		<Text style={{ fontWeight: 'bold', marginBottom: 16 }}>Berita Terbaru</Text>
		<CardMenu title="Info Calon" icon="camera" />
		<CardMenu title="Berita" icon="book" />
		<CardMenu title="Media" icon="check-circle-outline" />
		<CardMenu title="Pesan" icon="camera" />
	</View>
);

export default MenuContainer;

const styles = StyleSheet.create({
	container: { flexDirection: 'column', margin: 16 },
	title: { textAlign: 'center', marginTop: 8 },
	cardContainer: { flex: 1, marginVertical: 16 },
});
