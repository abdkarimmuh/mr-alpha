import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Image, View, TouchableOpacity, SafeAreaView } from 'react-native';
import {
	Container,
	Text,
	Loading,
	ButtonForm,
	Snackbar,
} from '@app/components';
import Images from '@app/assets/images';
import Colors from '@app/assets/colors';
import Api from '@app/api/Api';
import { AsyncStorage, NavigationServices } from '@app/services';
import UserRedux from '@app/redux/user';
import Form from './Container/FormLoginContainer';
import styles from './styles';

type Props = {
	setData: any => void,
	setToken: any => void,
};

class LoginScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			isFetching: false,
			phone: '',
			password: '',
			error: false,
			visible: false,
		};
	}

	toggleSnackbar = () => {
		this.setState({ visible: !this.state.visible });
	};

	getUser = async token => {
		Api.get()
			.user(token)
			.then(res => {
				this.props.setData(res.data.data);
				this.setState({ isFetching: false });
				NavigationServices.resetStackNavigate(['Main']);
			})
			.catch(error => {
				console.error('ERROR', error);
			});
	};

	onPressLogin = async () => {
		this.setState({ isFetching: true });
		const { phone, password } = this.state;
		Api.post()
			.login(phone, password)
			.then(res => {
				console.log('Res login : ', res);
				if (res.status === 200) {
					AsyncStorage.StoreData('access_token', res.data.access_token);
					this.getUser(res.data.access_token);
					this.props.setToken(res.data.access_token);
				} else {
					this.setState({ isFetching: false });
					this.toggleSnackbar;
				}
			})
			.catch(error => {
				console.error('ERROR', error);
				this.setState({ error: true });
			});
	};

	render() {
		if (this.state.isFetching) {
			return (
				<Container style={{ flex: 1, backgroundColor: Colors.transparent }}>
					<Loading />
				</Container>
			);
		} else {
			return (
				<SafeAreaView style={{ flex: 1 }}>
					<View style={[styles.container, { flex: 1 }]}>
						<Container />
						<Container>
							<Image source={Images.logo.banner} style={styles.logo} />
							<Form
								password={this.state.password}
								phone={this.state.phone}
								changePassword={password => {
									this.setState({ password });
								}}
								changePhone={phone => {
									this.setState({ phone });
								}}
							/>
							<TouchableOpacity
								onPress={() => NavigationServices.navigate('ChangePassword')}
							>
								<Text style={{ textAlign: 'right', color: Colors.black4A }}>
									Lupa Password?
								</Text>
							</TouchableOpacity>
						</Container>
						<Container>
							<ButtonForm
								label="Login"
								onPress={() => NavigationServices.resetStackNavigate(['Main'])}
							/>
							<View style={styles.captionContainer}>
								<Text style={{ color: Colors.black4A }}>Belum punya akun?</Text>
								<TouchableOpacity
									onPress={() => NavigationServices.navigate('Register')}
								>
									<Text style={styles.boldText}>Register</Text>
								</TouchableOpacity>
							</View>
						</Container>
					</View>
					<Snackbar
						visible={this.state.visible}
						onDismiss={this.toggleSnackbar}
						action={{
							label: 'Cancel',
							onPress: this.toggleSnackbar,
						}}
					>
						Tidak dapat terhubung
					</Snackbar>
				</SafeAreaView>
			);
		}
	}
}

const mapDispatchToProps = dispatch => ({
	setData: data => dispatch(UserRedux.actions.setData({ data })),
	setToken: token => dispatch(UserRedux.actions.setToken(token)),
});

export default connect(
	null,
	mapDispatchToProps,
)(LoginScreen);
