import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { SplashScreen, GuestScreen, AddPendukungScreen } from '@app/screens';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import NewsStack from './NewsStack';
import MediaStack from './MediaStack';
import MessageStack from './MessageStack';
import CandidateStack from './CandidateStack';

const InitialStack = createStackNavigator(
	{
		Splash: {
			screen: SplashScreen,
			navigationOptions: {
				headerShown: false,
			},
		},
		Guest: GuestScreen,
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
		...CandidateStack,
		AddPendukung: AddPendukungScreen,
	},
	{
		initialRouteName: 'Main',
		headerMode: 'none',
	},
);

export default createAppContainer(InitialStack);
