import Colors from '@app/assets/colors';
import Styles from '@app/assets/styles';
import { ButtonForm, Text, TextInput } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import { NavigationServices } from '@app/services';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

const goBack = () => NavigationServices.goBack();

class AddNewsScreen extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: '',
			message: '',
		};
	}

	_handleInput = field => value => this.setState({ [field]: value });

	render() {
		const { title, body, message } = this.state;
		return (
			<LayoutAppbar hasBack title="Tulis Berita">
				<TextInput
					label="Judul Berita"
					value={title}
					style={Styles.input}
					onChangeText={this._handleInput('title')}
					placeholder="Masukkan Judul Berita"
				/>
				<TextInput
					multiline
					label="Konten"
					value={body}
					style={Styles.input}
					onChangeText={this._handleInput('body')}
					numberOfLines={4}
					placeholder="Masukkan Konten"
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
							!title || !body
								? () => this.setState({ message: 'Semua kolom wajib diisi' })
								: () => console.log('isi')
						}
					/>
				</View>
			</LayoutAppbar>
		);
	}
}

export default AddNewsScreen;
