import React, { Component } from 'react';
import { BarStatus } from '@app/components';

import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { theme } from '@app/themes';

import store from './redux/store';
import AppNavigation from './navigation';
import { NavigationServices } from '@app/services';

export default class AppRoot extends Component {
	render() {
		// console.disableYellowBox = true;
		return (
			<Provider store={store}>
				<PaperProvider
					theme={theme}
					settings={{ icon: props => <FontAwesome {...props} /> }}
				>
					<BarStatus />
					<AppNavigation
						ref={navigatorRef =>
							NavigationServices.setTopLevelNavigator(navigatorRef)
						}
					/>
				</PaperProvider>
			</Provider>
		);
	}
}
