import {DetailHistoryScreen} from '@app/screens';
import Color from '@app/assets/colors';

export default {
  DetailHistory: {
    screen: DetailHistoryScreen,
    navigationOptions: ({navigation}) => ({
      headerTitle: `${navigation.getParam('title')}`,
      headerStyle: {
        backgroundColor: Color.primaryColor,
      },
      headerTintColor: Color.white,
    }),
  },
};
