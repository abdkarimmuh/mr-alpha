import Colors from '@app/assets/colors';
import { ButtonForm, TextInput } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import NavigationServices from '@app/services/NavigationServices';
import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: Colors.transparent,
		fontSize: 12,
		padding: -10,
		marginBottom: 16,
	},
	containerBtnButtom: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 24,
		alignSelf: 'flex-end',
	},
});

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
			<LayoutAppbar
				title="Buat Pesan"
				hasBack
				style={{ padding: 0, paddingBottom: 64 }}
			>
				<ScrollView
					style={{ padding: 16 }}
					contentContainerStyle={{ paddingBottom: 30 }}
				>
					<TextInput
						label="Masukkan Pesan"
						value={message}
						style={styles.inputContainer}
						onChangeText={this._handleInput('message')}
						autoCapitalize={'words'}
						multiline
						numberOfLines={5}
					/>
					<View style={styles.containerBtnButtom}>
						<ButtonForm
							label="Batal"
							color={Colors.borderGrey}
							onPress={() => NavigationServices.goBack()}
						/>
						<View style={{ width: 10 }} />
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
