import React from 'react';
import { Button } from 'react-native-paper';
import { theme } from '@app/themes';

const ButtonForm = ({ label, onPress, color, icon }) => (
	<Button
		theme={theme}
		mode="contained"
		style={{ borderRadius: 2, paddingHorizontal: 8, marginBottom: 16, marginTop: 8, elevation: 2 }}
		onPress={onPress}
		uppercase
		dark
		color={color}
		icon={icon}
	>
		{label}
	</Button>
);

export default ButtonForm;
