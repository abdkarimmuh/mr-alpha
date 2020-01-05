import { createStackNavigator } from 'react-navigation-stack';
import { LoginScreen, RegisterScreen } from '@app/screens';

export default createStackNavigator(
	{
		Login: {
			screen: LoginScreen,
			navigationOptions: {
				headerShown: false,
			},
		},
		Register: {
			screen: RegisterScreen,
			navigationOptions: {
				headerShown: false,
			},
		},
	},
	{
		initialRouteName: 'Login',
	},
);
