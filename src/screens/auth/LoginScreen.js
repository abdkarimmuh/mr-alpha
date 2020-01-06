import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
	Image,
	View,
	StyleSheet,
	ToastAndroid,
	TouchableOpacity,
} from 'react-native';
import { Container, Text, TextInput, Loading, Button } from '@app/components';
import { theme } from '@app/themes';
import Images from '@app/assets/images';
import Color from '@app/assets/colors';
import Styles from '@app/assets/styles';
import Api from '@app/api/Api';
import { AsyncStorage, NavigationServices } from '@app/services';
import UserRedux from '@app/redux/user';
import Icon from 'react-native-vector-icons/FontAwesome';

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
		};
	}

	getUser = async token => {
		Api.get()
			.user(token)
			.then(res => {
				this.props.setData(res.data.data);
				this.setState({ isFetching: false });
				NavigationServices.resetStackNavigate(['Main']);
			})
			.catch(error => {
				console.log('ERROR', error);
			});
	};

	goToRegister = () => {
		NavigationServices.navigate('Register');
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
					ToastAndroid.show('Tidak dapat terhubung', ToastAndroid.SHORT);
				}
			})
			.catch(error => {
				console.log('ERROR', error);
				this.setState({ error: true });
			});
	};

	renderForm = () => {
		return (
			<>
				<TextInput
					label="Phone"
					mode="outlined"
					theme={theme}
					value={this.state.phone}
					style={Styles.textInput}
					onChangeText={phone => {
						this.setState({ phone });
					}}
					keyboardType={'phone-pad'}
				/>
				<TextInput
					label="Password"
					mode="outlined"
					theme={theme}
					secureTextEntry
					value={this.state.password}
					style={Styles.textInput}
					onChangeText={password => {
						this.setState({ password });
					}}
				/>
			</>
		);
	};

	render() {
		if (this.state.isFetching) {
			return (
				<Container style={{ flex: 1, backgroundColor: Color.transparent }}>
					<Loading />
				</Container>
			);
		} else {
			return (
				<View style={styles.view}>
					<Container style={{ marginBottom: 16 }}>
						<Button>Hai</Button>
						<View style={styles.captionContainer}>
							<Text style={{ color: Color.black4A, marginRight: 4 }}>
								Belum punya akun?
							</Text>
							<TouchableOpacity onPress={() => this.goToRegister()}>
								<Text style={{ fontWeight: 'bold', color: Color.primaryColor }}>
									Register
								</Text>
							</TouchableOpacity>
							<Icon name="rocket" size={30} color="#900" />
						</View>
					</Container>
					<Container style={{ marginBottom: 16 }}>
						<Image source={Images.logo.banner} style={styles.image} />
						{this.renderForm()}
						<TouchableOpacity onPress={() => this.goToRegister()}>
							<Text style={{ textAlign: 'right', color: Color.black4A }}>
								Lupa Password?
							</Text>
						</TouchableOpacity>
					</Container>
				</View>
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

const styles = StyleSheet.create({
	view: {
		flex: 1,
		// justifyContent: 'center',
		flexDirection: 'column-reverse',
		backgroundColor: Color.backgroudDefault,
	},
	image: {
		width: 200,
		height: 100,
		resizeMode: 'contain',
		alignSelf: 'center',
		marginBottom: 12,
	},
	captionContainer: {
		flexDirection: 'row',
		alignSelf: 'center',
		marginTop: 24,
	},
});
