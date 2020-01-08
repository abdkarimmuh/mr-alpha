import React from 'react';
import { InputForm } from '@app/components';

const FormRegisterContainer = ({
	name,
	changeName,
	phone,
	changePhone,
	password,
	changePassword,
	koordinator,
	changeKoordinator,
}) => (
	<>
		<InputForm label="Name" value={name} onChangeText={changeName} />
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
			secureTextEntry={true}
		/>
		<InputForm
			label="No.Koordinator"
			value={koordinator}
			onChangeText={changeKoordinator}
			keyboardType="numeric"
		/>
	</>
);

export default FormRegisterContainer;
