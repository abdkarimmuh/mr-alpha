import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { SplashScreen } from '@app/screens';
import AuthStack from './AuthStack';
// import MainBottom from './MainBottom';

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
		// Main: {
		//   screen: MainBottom,
		//   navigationOptions: {
		//     headerShown: false,
		//   },
		// },
	},
	{
		initialRouteName: 'Splash',
	},
);

export default createAppContainer(InitialStack);
