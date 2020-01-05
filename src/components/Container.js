import React from 'react';
import { View } from 'react-native';

const Container = ({ style, ...others }) => (
	<View style={[{ padding: 24 }, style]} {...others} />
);
export default Container;
