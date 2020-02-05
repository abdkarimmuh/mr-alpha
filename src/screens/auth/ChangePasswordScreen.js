import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, ToastAndroid } from 'react-native';
import { TextInput, Button, HelperText, Loading } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import Colors from '@app/assets/colors';
import { NavigationServices } from '@app/services';
import Api from '@app/api/Api';
import UserRedux from '@app/redux/user';

const styles = StyleSheet.create({
	input: {
		backgroundColor: Colors.transparent,
		marginBottom: 24,
	},
	containerBtnButtom: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 24,
		alignSelf: 'flex-end',
	},
	btnCancel: { backgroundColor: Colors.grey, marginRight: 16 },
});

type Props = {
	token: string,
};

class ChangePasswordScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			old_password: '',
			new_password: '',
			confirm_password: '',
			isFetching: false,
		};
	}

	componentDidMount() { }

	pressCancel = () => {
		NavigationServices.goBack();
	};

	pressSubmit = async () => {
		console.log('Press Submit');
		this.setState({ isFetching: true });
		if (this.state.new_password === this.state.confirm_password) {
			Api.post()
				.changePassword(
					this.props.token,
					this.state.old_password,
					this.state.new_password,
				)
				.then(res => {
					this.setState({ isFetching: false });
					if (res.data.status === 'Success') {
						ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
						NavigationServices.resetStackNavigate(['Main']);
					} else {
						ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
					}
					console.log('Res Change Password : ', res);
				})
				.catch(error => {
					console.log('ERROR', error);
					this.setState({ isFetching: false });
					ToastAndroid.show('Tidak dapat terhubung', ToastAndroid.SHORT);
				});
		} else {
			this.setState({ isFetching: false });
			ToastAndroid.show('Password tidak sama', ToastAndroid.SHORT);
		}
	};

	render() {
		return (
			<LayoutAppbar hasBack title="Ganti Password">
				<TextInput
					label="Old Password"
					value={this.state.old_password}
					style={styles.input}
					secureTextEntry
					onChangeText={text => this.setState({ old_password: text })}
				/>
				<TextInput
					label="New Password"
					value={this.state.new_password}
					style={styles.input}
					secureTextEntry
					onChangeText={text => this.setState({ new_password: text })}
				/>
				<TextInput
					label="Confirm Password"
					value={this.state.confirm_password}
					style={styles.input}
					secureTextEntry
					onChangeText={text => this.setState({ confirm_password: text })}
				/>
				{this.state.confirm_password !== '' && (
					<HelperText
						type="error"
						visible={this.state.confirm_password !== this.state.new_password}
					>
						Password tidak sama
					</HelperText>
				)}
				{this.state.isFetching && (
					<View style={styles.containerBtnButtom}>
						<Loading />
					</View>
				)}
				<View style={styles.containerBtnButtom}>
					<Button
						dark
						mode="contained"
						style={styles.btnCancel}
						onPress={() => this.pressCancel()}
					>
						CANCEL
					</Button>
					<Button
						dark
						mode="contained"
						onPress={() => this.pressSubmit()}
						disabled={this.state.isFetching}
					>
						SAVE
					</Button>
				</View>
			</LayoutAppbar>
		);
	}
}

const mapStateToProps = state => ({
	token: UserRedux.selectors.token(state),
});

export default connect(
	mapStateToProps,
	null,
)(ChangePasswordScreen);
