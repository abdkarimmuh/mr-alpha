import Colors from '@app/assets/colors';
import { ButtonForm, Text, TextInput } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import NavigationServices from '@app/services/NavigationServices';
import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const goBack = () => NavigationServices.goBack();

const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: Colors.transparent,
		marginBottom: 16,
	},
	containerBtnButtom: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 24,
		alignSelf: 'flex-end',
	},
});

class AddPendukungScreen extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			nik: '',
		};
	}

	_handleInput = field => value => this.setState({ [field]: value });

	render() {
		const { name, nik } = this.state;
		return (
			<LayoutAppbar
				title="Tambah Pendukung"
				hasBack
				style={{ padding: 0 }}
			>
				<ScrollView
					style={{ padding: 24 }}
				>
					<Text style={{ textAlign: 'center', marginBottom: 24 }}>
						Pendukung adalah relawan yang tidak menggunakan aplikasi, tapi aktif
						melakukan kegiatan relawan.
					</Text>

					<TextInput
						label="Nama Pendukung"
						value={name}
						style={styles.inputContainer}
						onChangeText={this._handleInput('name')}
						autoCapitalize={'words'}
					/>

					<TextInput
						label="NIK"
						value={nik}
						style={styles.inputContainer}
						keyboardType={'number-pad'}
						onChangeText={this._handleInput('nik')}
					/>

					<Text tiny caption style={{ marginTop: 24, marginBottom: 8 }}>
						Upload KTP Relawan
					</Text>

					<ButtonForm
						label="Upload KTP"
					// onPress={() => NavigationServices.resetStackNavigate(['Main'])}
					/>
					<View style={styles.containerBtnButtom}>
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
				</ScrollView>
			</LayoutAppbar>
		);
	}
}

export default AddPendukungScreen;
