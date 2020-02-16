import Colors from '@app/assets/colors';
import Styles from '@app/assets/styles';
import { ButtonForm, FilePicker, Text, TextInput } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import { NavigationServices } from '@app/services';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

const goBack = () => NavigationServices.goBack();

class ChangeViceCandidateProfileScreen extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			profile: '',
			message: '',
		};
	}

	_handleInput = field => value => this.setState({ [field]: value });

	render() {
		const { name, profile, message } = this.state;
		return (
			<LayoutAppbar hasBack title="Ubah Profil Calon Wakil">
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<View>
						<Text tiny>Upload Foto Calon</Text>
						<FilePicker label="UPLOAD FOTO" />
					</View>
					<View>
						<Text tiny>Upload Foto Sampul</Text>
						<FilePicker label="UPLOAD FOTO" />
					</View>
				</View>

				<TextInput
					label="Nama Lengkap Calon"
					value={name}
					style={Styles.input}
					onChangeText={this._handleInput('name')}
					placeholder="Masukkan Nama Lengkap Calon"
				/>
				<TextInput
					multiline
					label="Profil Calon"
					value={profile}
					style={Styles.input}
					onChangeText={this._handleInput('profile')}
					numberOfLines={4}
					placeholder="Masukkan Profil Calon"
				/>

				<Text tiny warning>
					{message}
				</Text>

				<View style={Styles.containerLeftHalfButton}>
					<ButtonForm
						label="BATAL"
						color={Colors.borderGrey}
						onPress={goBack}
					/>
					<View style={{ width: 16 }} />
					<ButtonForm
						label="SIMPAN"
						onPress={
							!name || !profile
								? () => this.setState({ message: 'Semua kolom wajib diisi' })
								: () => console.log('isi')
						}
					/>
				</View>
			</LayoutAppbar>
		);
	}
}

export default ChangeViceCandidateProfileScreen;
