import Colors from '@app/assets/colors';
import Styles from '@app/assets/styles';
import { ButtonForm, Text, TextInput } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import { NavigationServices } from '@app/services';
import React, { PureComponent } from 'react';
import { View } from 'react-native';

const goBack = () => NavigationServices.goBack();

class ChangeVision extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			visi: '',
			misi: '',
			message: '',
		};
	}

	_handleInput = field => value => this.setState({ [field]: value });

	render() {
		const { visi, misi, message } = this.state;
		return (
			<LayoutAppbar hasBack title="Ubah Visi Misi">
				<TextInput
					label="Visi"
					value={visi}
					style={Styles.input}
					onChangeText={this._handleInput('visi')}
					placeholder="Masukkan Visi"
				/>
				<TextInput
					multiline
					label="Misi"
					value={misi}
					style={Styles.input}
					onChangeText={this._handleInput('misi')}
					numberOfLines={4}
					placeholder="Masukkan Misi"
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
							!visi || !misi
								? () => this.setState({ message: 'Semua kolom wajib diisi' })
								: () => console.log('isi')
						}
					/>
				</View>
			</LayoutAppbar>
		);
	}
}

export default ChangeVision;
