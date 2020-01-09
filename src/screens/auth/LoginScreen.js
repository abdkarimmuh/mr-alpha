import React, { PureComponent } from 'react';
import { Image, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

import Api from '@app/api/Api';
import Colors from '@app/assets/colors';
import Images from '@app/assets/images';
import Styles from '@app/assets/styles';
import { Text, Loading, ButtonForm, Snackbar } from '@app/components';
import { Layout } from '@app/containers';
import UserRedux from '@app/redux/user';
import { AsyncStorage, NavigationServices } from '@app/services';

import Form from './containers/FormLoginContainer';
import InnerStyles from './styles';

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

	// getUser = async token => {
	// 	Api.get()
	// 		.user(token)
	// 		.then(res => {
	// 			this.props.setData(res.data.data);
	// 			this.setState({ isFetching: false });
	// 			NavigationServices.resetStackNavigate(['Main']);
	// 		})
	// 		.catch(error => {
	// 			console.error('ERROR', error);
	// 		});
	// };

	// onPressLogin = async () => {
	// 	this.setState({ isFetching: true });
	// 	const { phone, password } = this.state;
	// 	Api.post()
	// 		.login(phone, password)
	// 		.then(res => {
	// 			console.log('Res login : ', res);
	// 			if (res.status === 200) {
	// 				AsyncStorage.StoreData('access_token', res.data.access_token);
	// 				this.getUser(res.data.access_token);
	// 				this.props.setToken(res.data.access_token);
	// 			} else {
	// 				this.setState({ isFetching: false });
	// 				this.toggleSnackbar;
	// 			}
	// 		})
	// 		.catch(error => {
	// 			console.error('ERROR', error);
	// 			this.setState({ error: true });
	// 		});
	// };

	render() {
		if (this.state.isFetching) {
			return (
				<Layout style={{ flex: 1, backgroundColor: Colors.transparent }}>
					<Loading />
				</Layout>
			);
		} else {
			return (
				<SafeAreaView style={{ flex: 1 }}>
					<View style={[InnerStyles.container, { flex: 1 }]}>
						<Layout />
						<Layout>
							<Image source={Images.logo.banner} style={InnerStyles.logo} />
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
								<Text style={[Styles.font, { textAlign: 'right' }]}>
									Lupa Password?
								</Text>
							</TouchableOpacity>
						</Layout>
						<Layout>
							<ButtonForm
								label="Login"
								onPress={() => NavigationServices.resetStackNavigate(['Main'])}
							/>
							<View style={InnerStyles.captionContainer}>
								<Text style={Styles.font}>Belum punya akun?</Text>
								<TouchableOpacity
									onPress={() => NavigationServices.navigate('Register')}
								>
									<Text style={[Styles.font, InnerStyles.boldText]}>
										Register
									</Text>
								</TouchableOpacity>
							</View>
						</Layout>
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
