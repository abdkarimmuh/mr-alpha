import React from 'react';
import { TouchableRipple } from 'react-native-paper';

const RippleEffect = ({ onPress, children, style }) => (
	<TouchableRipple
		onPress={onPress}
		style={style}
		rippleColor="rgba(243,156,18, .32)"
		centered
	>
		{children}
	</TouchableRipple>
);

export default RippleEffect;
