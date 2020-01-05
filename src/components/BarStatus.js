import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import Color from '@app/assets/colors';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const BarStatus = () => (
	<View style={{ height: STATUSBAR_HEIGHT }}>
		<StatusBar translucent backgroundColor={Color.black4A} />
	</View>
);

export default BarStatus;
