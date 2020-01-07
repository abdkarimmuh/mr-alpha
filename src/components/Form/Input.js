import React from 'react';
import { TextInput } from 'react-native-paper';
import { theme } from '@app/themes';

// const Input = props => {
// 	var { ...other } = props;
// 	return (
// 		<TextInput
// 			{...other}
// 			mode="outlined"
// 			theme={theme}
// 			style={{ marginBottom: 16, height: 48 }}
// 		/>
// 	);
// };

const InputForm = ({
	label,
	value,
	onChangeText,
	keyboardType,
	secureTextEntry = false,
}) => (
	<TextInput
		mode="outlined"
		theme={theme}
		style={{ marginBottom: 16, height: 48 }}
		label={label}
		value={value}
		onChangeText={onChangeText}
		keyboardType={keyboardType}
		secureTextEntry={secureTextEntry}
	/>
);

export default InputForm;
