import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {HeaderDefault} from '@app/components';
import {HeaderMenu} from '@app/containers';
import {MainScreen} from '@app/screens';
import Color from '@app/assets/colors';

export default createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: {
        headerTitle: <HeaderDefault />,
        headerStyle: {
          backgroundColor: Color.primaryColor,
          elevation: 0,
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
          shadowRadius: 0,
        },
        headerRight: <HeaderMenu />,
      },
    },
  },
  {
    initialRouteName: 'Main',
  },
);
