import Colors from '@app/assets/colors';
import styles from '@app/assets/styles';
import { Avatar, ButtonForm, TextInput } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import { NavigationServices } from '@app/services';
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

const goBack = () => NavigationServices.goBack();

class EditProfileScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
		};
	}

	_handleInput = field => value => this.setState({ [field]: value });

	render() {
		const { name, email } = this.state;
		return (
			<LayoutAppbar hasBack title="Edit Profil">
				<Avatar.Text
					size={80}
					label="XD"
					style={[styles.shadowOn, { alignSelf: 'center', marginBottom: 20 }]}
				/>

				<TextInput
					label="Full Name"
					value={name}
					style={styles.noBorderInput}
					autoCapitalize={'words'}
					onChangeText={this._handleInput('name')}
				/>

				<TextInput
					label="Email"
					value={email}
					style={styles.noBorderInput}
					keyboardType={'email-address'}
					autoCapitalize={'none'}
					onChangeText={this._handleInput('email')}
				/>

				<View style={styles.containerLeftHalfButton}>
					<ButtonForm
						label="Batal"
						color={Colors.borderGrey}
						onPress={goBack}
					/>
					<View style={{ width: 10 }} />
					<ButtonForm
						label="Simpan"
						// onPress={() => NavigationServices.resetStackNavigate(['Main'])}
					/>
				</View>
			</LayoutAppbar>
		);
	}
}

export default EditProfileScreen;
