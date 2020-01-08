import React from 'react';
import { Card, Text, RippleEffect } from '@app/components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationServices } from '@app/services';
import Colors from '@app/assets/colors';
import Styles from '@app/assets/styles';
import { View, StyleSheet } from 'react-native';

// 320,375,425, 384

const Menu = [
	{ id: '1', title: 'Info Calon', icon: 'camera', screen: 'Info' },
	{ id: '2', title: 'Berita', icon: 'newspaper', screen: 'News' },
	{ id: '3', title: 'Media', icon: 'image', screen: 'Media' },
	{ id: '4', title: 'Pesan', icon: 'message', screen: 'Message' },
];

const CardMenu = ({ title, icon, screen }) => (
	<View style={InnerStyles.container}>
		<Card style={[InnerStyles.cardContainer, Styles.shadowOn]}>
			<RippleEffect
				onPress={() => NavigationServices.navigate(screen)}
				style={{ flex: 1, justifyContent: 'center' }}
			>
				<Card.Content>
					<Icon
						name={icon}
						size={32}
						color={Colors.primaryColor}
						style={{ textAlign: 'center', textAlignVertical: 'center' }}
					/>
				</Card.Content>
			</RippleEffect>
		</Card>
		<Text style={[Styles.font, InnerStyles.title]}>{title}</Text>
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
		{Menu.map(item => (
			<CardMenu
				key={item.id}
				title={item.title}
				icon={item.icon}
				screen={item.screen}
			/>
		))}
	</View>
);

export default MenuContainer;

const InnerStyles = StyleSheet.create({
	container: { flexDirection: 'column', margin: 16 },
	title: { textAlign: 'center', marginTop: 8 },
	cardContainer: { width: 64, height: 64 },
});
