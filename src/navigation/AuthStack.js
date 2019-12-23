import { createStackNavigator } from 'react-navigation-stack';
import { LoginScreen, RegisterScreen } from '@app/screens';

export default createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null,
            },
        },
        Register: {
            screen: RegisterScreen,
            navigationOptions: {
                header: null,
            },
        },
    },
    {
        initialRouteName: 'Login',
    },
);
