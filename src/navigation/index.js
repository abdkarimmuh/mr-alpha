import { AddPendukungScreen, GuestScreen, SplashScreen } from '@app/screens';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AuthStack from './AuthStack';
import CandidateStack from './CandidateStack';
import MainStack from './MainStack';
import MediaStack from './MediaStack';
import MessageStack from './MessageStack';
import NewsStack from './NewsStack';
import TimsesStack from './TimsesStack';

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
		...TimsesStack,
		AddPendukung: AddPendukungScreen,
	},
	{
		initialRouteName: 'Splash',
		headerMode: 'none',
	},
);

export default createAppContainer(InitialStack);
