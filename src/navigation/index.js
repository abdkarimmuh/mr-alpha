import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {SplashScreen} from '@app/screens';
import AuthStack from './AuthStack';
import MainBottom from './MainBottom';
import PickStack from './PickStack';
import NotificationsStack from './NotificationsStack';
import UsersStack from './UsersStack';

import HistoryStack from './HistoryStack';
import ProcurementStack from './ProcurementStack';

const InitialStack = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
      },
    },
    Auth: {
      screen: AuthStack,
      navigationOptions: {
        header: null,
      },
    },
    Main: {
      screen: MainBottom,
      navigationOptions: {
        header: null,
      },
    },
    ...ProcurementStack,
    ...HistoryStack,
    ...PickStack,
    ...NotificationsStack,
    ...UsersStack,
  },
  {
    initialRouteName: 'Splash',
    swipeEnabled: true,
  },
);

export default createAppContainer(InitialStack);
