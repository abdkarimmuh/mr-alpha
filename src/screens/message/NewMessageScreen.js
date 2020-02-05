import Colors from '@app/assets/colors';
import { ButtonForm, TextInput, DropdownPicker } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import NavigationServices from '@app/services/NavigationServices';
import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: Colors.transparent,
		marginBottom: 24,
	},
	containerBtnButtom: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 24,
		alignSelf: 'flex-end',
	},
});

const data = [
	{
		label: 'Agus',
		value: '1',
	},
	{
		label: 'Tatang',
		value: '2',
	},
	{
		label: 'Ahmad',
		value: '3',
	},
];
class NewMessageScreen extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			message: '',
			subject: '',
		};
	}

	_handleInput = field => value => this.setState({ [field]: value });

	render() {
		const { message, subject } = this.state;
		return (
			<LayoutAppbar title="Buat Pesan" hasBack style={{ padding: 0 }} >
				<ScrollView style={{ padding: 24 }} >
					<TextInput
						label="Masukkan Pesan"
						value={message}
						style={styles.inputContainer}
						onChangeText={this._handleInput('message')}
						autoCapitalize={'words'}
						multiline
						numberOfLines={5}
					/>

					<DropdownPicker
						data={data}
						placeholder="Pilih tujuan pesan"
						label="Subject"
						onValueChange={value => this.setState({ subject: value })}
					/>

					<View style={styles.containerBtnButtom}>
						<ButtonForm
							label="Batal"
							color={Colors.borderGrey}
							onPress={() => NavigationServices.goBack()}
						/>
						<View style={{ width: 16 }} />
						<ButtonForm
							label="Kirim"
						// onPress={() => NavigationServices.resetStackNavigate(['Main'])}
						/>
					</View>
				</ScrollView>
			</LayoutAppbar>
		);
	}
}

export default NewMessageScreen;
