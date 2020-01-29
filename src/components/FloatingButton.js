import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

const FloatingButton = ({ label, onPress, color, icon }) => (
	<View
		style={{
			position: 'absolute',
			left: 0,
			right: 0,
			bottom: 0,
			justifyContent: 'center',
			alignItems: 'center',
		}}
	>
		<Button
			onPress={onPress}
			mode="contained"
			style={{
				borderRadius: 25,
				position: 'absolute',
				bottom: 0,
				marginBottom: 20,
			}}
			labelStyle={{ color: 'white', marginHorizontal: 40 }}
		>
			{label}
		</Button>
	</View>
);

export default FloatingButton;
