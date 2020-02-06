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
		<InputForm label="Nama Lengkap" value={name} onChangeText={changeName} />
		<InputForm
			label="Password"
			value={password}
			onChangeText={changePassword}
			secureTextEntry={true}
		/>
		<InputForm
			label="Nomor HP"
			value={phone}
			onChangeText={changePhone}
			keyboardType="phone-pad"
		/>
		<InputForm
			label="Nomor HP Pengajak"
			value={koordinator}
			onChangeText={changeKoordinator}
			keyboardType="numeric"
		/>
	</>
);

export default FormRegisterContainer;
