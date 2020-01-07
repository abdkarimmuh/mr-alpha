import React from 'react';
import { InputForm } from '@app/components';

const FormLoginContainer = ({
	phone,
	changePhone,
	password,
	changePassword,
}) => (
	<>
		<InputForm
			label="Phone"
			value={phone}
			onChangeText={changePhone}
			keyboardType="phone-pad"
		/>
		<InputForm
			label="Password"
			value={password}
			onChangeText={changePassword}
			secureTextEntry
		/>
	</>
);

export default FormLoginContainer;
