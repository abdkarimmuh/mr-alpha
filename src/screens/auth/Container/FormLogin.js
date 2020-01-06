import React from 'react';
import { Input } from '@app/components';

const FormLogin = ({
	label,
	value,
	onChangeText,
	keyboardType,
	secureTextEntry,
}) => (
	<>
		<Input
			label="Phone"
			value={this.state.phone}
			onChangeText={phone => {
				this.setState({ phone });
			}}
			keyboardType={'phone-pad'}
		/>
		<Input
			label="Password"
			secureTextEntry
			value={this.state.password}
			onChangeText={password => {
				this.setState({ password });
			}}
		/>
	</>
);

export default FormLogin;
