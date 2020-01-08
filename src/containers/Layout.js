import React from 'react';
import { View } from 'react-native';

const Layout = ({ style, children, ...others }) => (
	<View style={[{ padding: 24 }, style]} {...others}>
		{children}
	</View>
);
export default Layout;
