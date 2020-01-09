import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { SplashScreen } from '@app/screens';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import NewsStack from './NewsStack';
import MediaStack from './MediaStack';
import MessageStack from './MessageStack';

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
		...NewsStack,
		...MediaStack,
		...MessageStack,
	},
	{
		initialRouteName: 'Splash',
	},
);

export default createAppContainer(InitialStack);
