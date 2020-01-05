import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Text } from '@app/components';
import Icon from 'react-native-vector-icons/FontAwesome';

// import MainStack from './MainStack';
import Color from '@app/assets/colors';

const activeTintLabelColor = '#fff';
const inactiveTintLabelColor = Color.white50;

const Label = ({ text }) => (
	<Text
		style={{ fontSize: 12, color: activeTintLabelColor, textAlign: 'center' }}
	>
		{text}
	</Text>
);

const TabIcon = ({ name }) => ({ focused }) => (
	<Icon
		name={name}
		color={focused ? activeTintLabelColor : inactiveTintLabelColor}
		size={20}
	/>
);

export default createMaterialBottomTabNavigator(
	{
		// Home: {
		//   screen: MainStack,
		//   navigationOptions: {
		//     tabBarLabel: Label({text: 'Home'}),
		//     tabBarIcon: TabIcon({name: 'home'}),
		//   },
		// },
		// Procurement: {
		//   screen: ProcurementStack,
		//   navigationOptions: {
		//     tabBarLabel: Label({text: 'Procurement'}),
		//     tabBarIcon: TabIcon({name: 'truck'}),
		//   },
		// },
		// History: {
		//   screen: HistoryStack,
		//   navigationOptions: {
		//     tabBarLabel: Label({text: 'History'}),
		//     tabBarIcon: TabIcon({name: 'history'}),
		//   },
		// },
	},
	{
		swipeEnabled: true,
	},
);
