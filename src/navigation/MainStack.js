import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
	HomeScreen,
	ProfilScreen,
	PublicBoardScreen,
	AfiliasiScreen,
} from '@app/screens';

import Color from '@app/assets/colors';

const activeTintLabelColor = Color.primaryColor;
const inactiveTintLabelColor = Color.black;

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
				tabBarIcon: TabIcon({ name: 'truck' }),
			},
		},
		PublicBoard: {
			screen: PublicBoardScreen,
			navigationOptions: {
				tabBarIcon: TabIcon({ name: 'history' }),
			},
		},
		Profil: {
			screen: ProfilScreen,
			navigationOptions: {
				tabBarIcon: TabIcon({ name: 'user' }),
			},
		},
	},
	{
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
