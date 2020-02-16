import { createStackNavigator } from 'react-navigation-stack';
import {
	LoginScreen,
	RegisterScreen,
	ChangePasswordScreen,
} from '@app/screens';

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
		ChangePassword: {
			screen: ChangePasswordScreen,
			navigationOptions: {
				headerShown: false,
			},
		},
	},
	{
		initialRouteName: 'Register',
	},
);
