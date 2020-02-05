import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, RippleEffect, Text } from '@app/components';
import { NavigationServices } from '@app/services';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '@app/assets/colors';
import Styles from '@app/assets/styles';
import Images from '@app/assets/images';

// 320,375,425, 384,424

const Menu = [
	{ id: '1', title: 'Profil', icon: Images.icon.mainProfile, screen: 'CandidateProfile' },
	{ id: '2', title: 'Berita', icon: Images.icon.mainNews, screen: 'News' },
	{ id: '3', title: 'Media', icon: Images.icon.mainMedia, screen: 'Media' },
];

const CardMenu = ({ title, icon, screen }) => (
	<View style={InnerStyles.container}>
		<Card style={[InnerStyles.cardContainer, Styles.shadowOn]}>
			<RippleEffect
				onPress={() => NavigationServices.navigate(screen)}
				style={{ flex: 1, justifyContent: 'center' }}
			>
				<Card.Content>
					<Image
						source={icon}
						style={Styles.imageMainMenu}
					/>
				</Card.Content>
			</RippleEffect>
		</Card>
		<Text style={[Styles.font, InnerStyles.title]}>{title}</Text>
	</View>
);

const Layout1 = () => (
	<View
		style={{
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'space-evenly',
			marginTop: 24,
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

const Layout2 = () => (
	<View
		style={{
			flexDirection: 'column',
		}}
	>
		<View
			style={{
				flexDirection: 'row',
				flexWrap: 'wrap',
				justifyContent: 'space-evenly',
				marginVertical: 8,
			}}
		>
			{Menu.slice(0, 2).map(item => (
				<CardMenu
					key={item.id}
					title={item.title}
					icon={item.icon}
					screen={item.screen}
				/>
			))}
		</View>
		<View
			style={{
				flexDirection: 'row',
				flexWrap: 'wrap',
				justifyContent: 'space-evenly',
				marginVertical: 8,
			}}
		>
			{Menu.slice(2, 4).map(item => (
				<CardMenu
					key={item.id}
					title={item.title}
					icon={item.icon}
					screen={item.screen}
				/>
			))}
		</View>
	</View>
);

const MenuContainer = () => {
	// if (Metrics.DEVICE_WIDTH <= 414) {
	// 	return <Layout2 />;
	// } else {
	// 	return <Layout1 />;
	// }

	return <Layout1 />;
};

export default MenuContainer;

const InnerStyles = StyleSheet.create({
	container: { flexDirection: 'column', margin: 8 },
	title: { textAlign: 'center', marginTop: 16 },
	cardContainer: { width: 80, height: 80 },
});
