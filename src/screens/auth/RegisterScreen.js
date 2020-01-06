import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
	Image,
	View,
	StyleSheet,
	ToastAndroid,
	TouchableOpacity,
} from 'react-native';
import { Container, Text, TextInput, Loading, Checkbox } from '@app/components';
import { theme } from '@app/themes';
import Images from '@app/assets/images';
import Color from '@app/assets/colors';
import Styles from '@app/assets/styles';
import Api from '@app/api/Api';
import Strings from '@app/assets/strings';
import { NavigationServices, AsyncStorage } from '@app/services';
import { Metrics } from '@app/themes';

import UserRedux from '@app/redux/user';

type Props = {
	setData: any => void,
	setToken: any => void,
};

class RegisterScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			isFetching: false,
			name: '',
			noKoordinator: '',
			phone: '',
			password: '',
			error: false,
			checked: false,
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

	goToLogin = () => {
		NavigationServices.navigate('Login');
	};

	onPressRegister = async () => {
		this.setState({ isFetching: true });
		const { name, phone, password, noKoordinator } = this.state;
		Api.post()
			.login(name, phone, password, noKoordinator)
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
					label="Name"
					mode="outlined"
					theme={theme}
					value={this.state.name}
					style={Styles.textInput}
					onChangeText={name => {
						this.setState({ name });
					}}
				/>
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
				<TextInput
					label="No Koordinator"
					mode="outlined"
					theme={theme}
					value={this.state.noKoordinator}
					style={Styles.textInput}
					onChangeText={noKoordinator => {
						this.setState({ noKoordinator });
					}}
					keyboardType={'phone-pad'}
				/>
			</>
		);
	};

	termReference = () => {
		const { checked } = this.state;
		return (
			<View style={styles.containerTermReference}>
				<Checkbox
					status={checked ? 'checked' : 'unchecked'}
					onPress={() => {
						this.setState({ checked: !checked });
					}}
				/>
				<View>
					<Text>{Strings.REFERENCE} </Text>
					<Text style={{ fontWeight: 'bold' }}>{Strings.TERM}</Text>
				</View>
			</View>
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
					<Container>
						{/* <Image source={Images.logo.banner} style={styles.image} /> */}
						{this.renderForm()}
						{/* {ButtonLoginRegister("UPLOAD KTP", this.onPressRegister)} */}
						{this.termReference()}
					</Container>
					<Container>
						{/* {ButtonLoginRegister("REGISTER", this.onPressRegister)} */}
						<View style={styles.caption}>
							<Text>Sudah punya akun? </Text>
							<TouchableOpacity onPress={() => this.goToLogin()}>
								<Text style={{ fontWeight: 'bold', color: Color.primaryColor }}>
									Login
								</Text>
							</TouchableOpacity>
						</View>
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
)(RegisterScreen);

const styles = StyleSheet.create({
	view: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: Color.backgroudDefault,
	},
	container: {
		flexDirection: 'column',
		justifyContent: 'center',
		width: '100%',
		height: '100%',
		paddingVertical: 24,
		paddingHorizontal: 32,
	},
	image: {
		width: 200,
		height: 100,
		resizeMode: 'contain',
		alignSelf: 'center',
		marginBottom: 12,
	},
	title: {
		alignSelf: 'center',
		paddingTop: 28,
		fontSize: 48,
		color: Color.primaryColor,
		fontWeight: 'bold',
	},
	bottom: {
		position: 'absolute',
		bottom: 0,
		alignSelf: 'center',
		marginBottom: 32,
		paddingHorizontal: 24,
		width: '100%',
	},
	caption: { flexDirection: 'row', alignSelf: 'center' },
	containerTermReference: { flexDirection: 'row' },
	textTermReference: { width: Metrics.DEVICE_WIDTH - 84 },
});
