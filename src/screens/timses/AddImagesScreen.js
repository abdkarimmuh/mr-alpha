import Colors from '@app/assets/colors';
import Styles from '@app/assets/styles';
import { ButtonForm, FilePicker, Text, TextInput } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import { NavigationServices } from '@app/services';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

const goBack = () => NavigationServices.goBack();

class AddImagesScreen extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			message: '',
		};
	}

	_handleInput = field => value => this.setState({ [field]: value });

	render() {
		const { title, message } = this.state;
		return (
			<LayoutAppbar hasBack title="Upload Gambar">
				<TextInput
					label="Judul"
					value={title}
					style={Styles.input}
					onChangeText={this._handleInput('title')}
					placeholder="Masukkan Judul"
				/>

				<Text tiny warning>
					{message}
				</Text>

				<FilePicker label="UPLOAD GAMBAR" icon="image-outline" />

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
							!title
								? () => this.setState({ message: 'Semua kolom wajib diisi' })
								: () => console.log('isi')
						}
					/>
				</View>
			</LayoutAppbar>
		);
	}
}

export default AddImagesScreen;
