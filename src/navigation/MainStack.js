import Colors from '@app/assets/colors';
import { AfiliasiScreen, HomeScreen } from '@app/screens';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ProfileStack from './ProfileStack';

const activeTintLabelColor = Colors.primaryColor;
const inactiveTintLabelColor = Colors.black;

const TabIcon = ({ name }) => ({ focused }) => (
	<Icon
		name={name}
		color={focused ? activeTintLabelColor : inactiveTintLabelColor}
		size={20}
	/>
);

export default createBottomTabNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarIcon: TabIcon({ name: 'home' }),
			},
		},
		Afiliasi: {
			screen: AfiliasiScreen,
			navigationOptions: {
				tabBarIcon: TabIcon({ name: 'folder' }),
			},
		},
		// PublicBoard: {
		// 	screen: PublicBoardScreen,
		// 	navigationOptions: {
		// 		tabBarIcon: TabIcon({ name: 'history' }),
		// 	},
		// },
		Profil: {
			screen: ProfileStack,
			navigationOptions: {
				tabBarIcon: TabIcon({ name: 'user' }),
			},
		},
	},
	{
		initialRouteName: 'Profil',
		swipeEnabled: true,
		tabBarOptions: {
			showLabel: false,
			style: {
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
	},
);
