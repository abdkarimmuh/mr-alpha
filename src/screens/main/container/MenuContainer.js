import React from 'react';
import { Card } from '@app/components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from '@app/assets/colors';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

// 320

const CardMenu = ({ title, icon }) => (
	<View style={styles.container}>
		<TouchableOpacity>
			<Card style={styles.cardContainer}>
				{/* <TouchableOpacity> */}
				<Card.Content style={{ flex: 1 }}>
					<Icon
						name={icon}
						size={32}
						color={Color.primaryColor}
						style={{ textAlign: 'center', textAlignVertical: 'center' }}
					/>
				</Card.Content>
				{/* </TouchableOpacity> */}
			</Card>
		</TouchableOpacity>
		<Text style={styles.title}>{title}</Text>
	</View>
);

const MenuContainer = () => (
	<View
		style={{
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'space-between',
			marginVertical: 8,
		}}
	>
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
	cardContainer: { width: 64, height: 64 },
});
