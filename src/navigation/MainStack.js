import Colors from '@app/assets/colors';
import Images from '@app/assets/images';
import { AfiliasiScreen, HomeScreen, TimsesScreen } from '@app/screens';
import React from 'react';
import { Image, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import ProfileStack from './ProfileStack';

const Label = ({ text }) => (
	<Text
		style={{
			fontSize: 12,
			color: Colors.textColor,
			textAlign: 'center',
			fontWeight: '500',
		}}
	>
		{text}
	</Text>
);

const TabIcon = ({ name }) => ({ focused }) => {
	if (name == 'home') {
		if (focused) {
			icon = Images.icon.home_active;
		} else {
			icon = Images.icon.home;
		}
	} else if (name == 'folder') {
		if (focused) {
			icon = Images.icon.folder_active;
		} else {
			icon = Images.icon.folder;
		}
	} else if (name == 'user') {
		if (focused) {
			icon = Images.icon.person_active;
		} else {
			icon = Images.icon.person;
		}
	} else if (name == 'timses') {
		if (focused) {
			icon = Images.icon.checkmark_active;
		} else {
			icon = Images.icon.checkmark;
		}
	}
	return (
		<Image
			source={icon}
			style={{ width: 24, height: 24, resizeMode: 'cover' }}
		/>
	);
};

export default createMaterialBottomTabNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarLabel: <Label text={'Home'} />,
				tabBarIcon: TabIcon({ name: 'home' }),
			},
		},
		Timses: {
			screen: TimsesScreen,
			navigationOptions: {
				tabBarLabel: <Label text={'Timses'} />,
				tabBarIcon: TabIcon({ name: 'timses' }),
			},
		},
		Afiliasi: {
			screen: AfiliasiScreen,
			navigationOptions: {
				tabBarLabel: <Label text={'Afiliasi'} />,
				tabBarIcon: TabIcon({ name: 'folder' }),
			},
		},
		// PublicBoard: {
		// 	screen: PublicBoardScreen,
		// 	navigationOptions: {
		//		tabBarLabel: <Label text={'Panel Timses'} />,
		// 		tabBarIcon: TabIcon({ name: 'history' }),
		// 	},
		// },
		Profil: {
			screen: ProfileStack,
			navigationOptions: {
				tabBarLabel: <Label text={'Profil'} />,
				tabBarIcon: TabIcon({ name: 'user' }),
			},
		},
	},
	{
		shifting: true,
		barStyle: {
			backgroundColor: Colors.white,
			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 12,
			},
			shadowOpacity: 0.58,
			shadowRadius: 16.0,
			elevation: 24,
		},
	},
);
