import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import Colors from '@app/assets/colors';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const BarStatus = () => (
	<View style={{ height: STATUSBAR_HEIGHT }}>
		<StatusBar translucent backgroundColor={Colors.black4A} />
	</View>
);

export default BarStatus;
