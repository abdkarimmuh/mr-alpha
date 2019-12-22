import {createStackNavigator} from 'react-navigation-stack';
import {LoginScreen} from '@app/screens';

export default createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);
