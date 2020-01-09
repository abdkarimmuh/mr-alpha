import React, { PureComponent } from 'react';
import {
	Image,
	View,
	ToastAndroid,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Api from '@app/api/Api';
import Colors from '@app/assets/colors';
import Images from '@app/assets/images';
import Strings from '@app/assets/strings';
import Styles from '@app/assets/styles';
import { Text, Loading, Checkbox, ButtonForm, Snackbar } from '@app/components';
import { Layout } from '@app/containers';
import { NavigationServices, AsyncStorage } from '@app/services';
import UserRedux from '@app/redux/user';

import Form from './containers/FormRegisterContainer';
import InnerStyles from './styles';

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
			koordinator: '',
			phone: '',
			password: '',
			error: false,
			checked: false,
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

	// onPressRegister = async () => {
	// 	this.setState({ isFetching: true });
	// 	const { name, phone, password, noKoordinator } = this.state;
	// 	Api.post()
	// 		.login(name, phone, password, noKoordinator)
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

	termReference = () => {
		const { checked } = this.state;
		return (
			<View style={InnerStyles.containerTermReference}>
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

	//TODO: Checkbox Belum Ada, bug rn-paper
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
					<ScrollView contentContainerStyle={InnerStyles.container}>
						<Layout />
						<Layout style={{ marginBottom: 16 }}>
							<Image source={Images.logo.banner} style={InnerStyles.logo} />
							<Form
								name={this.state.name}
								password={this.state.password}
								phone={this.state.phone}
								koordinator={this.state.koordinator}
								changeName={name => {
									this.setState({ name });
								}}
								changePassword={password => {
									this.setState({ password });
								}}
								changePhone={phone => {
									this.setState({ phone });
								}}
								changeKoordinator={koordinator => {
									this.setState({ koordinator });
								}}
							/>
							<ButtonForm
								label="Upload KTP"
								onPress={() => NavigationServices.navigate('Register')}
								color={Colors.black4A}
								icon={() => (
									<Icon
										name="camera"
										size={24}
										color={Colors.white}
										style={{
											width: 32,
											textAlign: 'center',
											textAlignVertical: 'center',
											alignSelf: 'center',
											paddingTop: 2,
										}}
									/>
								)}
							/>
							{/* {this.termReference()} */}
						</Layout>
						<Layout style={{ marginBottom: 16 }}>
							<ButtonForm
								label="Register"
								onPress={() => NavigationServices.navigate('Register')}
							/>
							<View style={InnerStyles.captionContainer}>
								<Text style={Styles.font}>Sudah punya akun?</Text>
								<TouchableOpacity onPress={() => NavigationServices.goBack()}>
									<Text style={[Styles.font, InnerStyles.boldText]}>Login</Text>
								</TouchableOpacity>
							</View>
						</Layout>
					</ScrollView>
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
)(RegisterScreen);
