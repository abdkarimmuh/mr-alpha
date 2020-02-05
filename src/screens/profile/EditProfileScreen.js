import Colors from '@app/assets/colors';
import styles from '@app/assets/styles';
import Images from '@app/assets/images';
import metrics from '@app/themes/metrics';
import { ButtonForm, TextInput } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import { NavigationServices } from '@app/services';
import React, { Component } from 'react';
import { SafeAreaView, View, Image } from 'react-native';


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
			<SafeAreaView style={{ flex: 1 }}>
				<LayoutAppbar hasBack title="Edit Profil">
					<Image source={Images.avatar.avatarWhite} style={[styles.shadowOn, { width: 80, height: 80, alignSelf: 'center', borderRadius: 40, marginBottom: 24 }]} />
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
						<View style={{ width: 16 }} />
						<ButtonForm
							label="Simpan"
						// onPress={() => NavigationServices.resetStackNavigate(['Main'])}
						/>
					</View>
				</LayoutAppbar>
				<Image source={Images.avatar.avatarEdit} style={{ position: 'absolute', left: ((metrics.DEVICE_WIDTH / 2) + 18), top: 138, width: 24, height: 24 }} />
			</SafeAreaView>

		);
	}
}

export default EditProfileScreen;
