import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { SplashScreen } from '@app/screens';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const InitialStack = createStackNavigator(
	{
		Splash: {
			screen: SplashScreen,
			navigationOptions: {
				headerShown: false,
			},
		},
		Auth: {
			screen: AuthStack,
			navigationOptions: {
				headerShown: false,
			},
		},
		Main: {
			screen: MainStack,
			navigationOptions: {
				headerShown: false,
			},
		},
	},
	{
		initialRouteName: 'Main',
	},
);

export default createAppContainer(InitialStack);
