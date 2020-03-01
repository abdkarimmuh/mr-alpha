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
import Config from '@app/api/Config';
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
			provinsi: '',
			kabupaten: '',
			kecamatan: '',
			kelurahan: '',
			error: false,
			checked: false,
			visible: false,
			itemsProvinsi: [],
			itemsKabupaten: [],
			itemsKecamatan: [],
			itemsKelurahan: [],
		};
	}

	toggleSnackbar = () => {
		this.setState({ visible: !this.state.visible });
	};

	componentDidMount() {
		this.getDaerah(1);
	}

	getDaerah = async (type, id) => {
		let res;
		switch (type) {
			case 1:
				res = await Api(Config.baseUrlDaerah)
					.get()
					.provinsi();
				res.data.semuaprovinsi.map(item => {
					item.value = item.nama;
					delete item.nama;
				});
				this.setState({ itemsProvinsi: res.data.semuaprovinsi });
				break;
			case 2:
				res = await Api(Config.baseUrlDaerah)
					.get()
					.kabupaten(id);
				res.data.kabupatens.map(item => {
					item.value = item.nama;
					delete item.nama;
				});
				this.setState({ itemsKabupaten: res.data.kabupatens });
				break;
			case 3:
				res = await Api(Config.baseUrlDaerah)
					.get()
					.kecamatan(id);
				res.data.kecamatans.map(item => {
					item.value = item.nama;
					delete item.nama;
				});
				this.setState({ itemsKecamatan: res.data.kecamatans });
				break;
			case 4:
				res = await Api(Config.baseUrlDaerah)
					.get()
					.kelurahan(id);
				res.data.desas.map(item => {
					item.value = item.nama;
					delete item.nama;
				});
				this.setState({ itemsKelurahan: res.data.desas });
				break;
			default:
				break;
		}
	};

	findDaerahId = (type, name) => {
		let res;
		switch (type) {
			case 1:
				res = this.state.itemsProvinsi.find(item => item.value === name);
				this.getDaerah(2, res.id);
				break;
			case 2:
				res = this.state.itemsKabupaten.find(item => item.value === name);
				this.getDaerah(3, res.id);
				break;
			case 3:
				res = this.state.itemsKecamatan.find(item => item.value === name);
				this.getDaerah(4, res.id);
				break;
			default:
				break;
		}
	};

	onPressRegister = async () => {
		NavigationServices.resetStackNavigate(['Main']);
		// this.setState({ isFetching: true });
		// const { name, phone, password, noKoordinator } = this.state;
		// Api.post()
		// 	.login(name, phone, password, noKoordinator)
		// 	.then(res => {
		// 		console.log('Res login : ', res);
		// 		if (res.status === 200) {
		// 			AsyncStorage.StoreData('access_token', res.data.access_token);
		// 			this.getUser(res.data.access_token);
		// 			this.props.setToken(res.data.access_token);
		// 		} else {
		// 			this.setState({ isFetching: false });
		// 			this.toggleSnackbar;
		// 		}
		// 	})
		// 	.catch(error => {
		// 		console.error('ERROR', error);
		// 		this.setState({ error: true });
		// 	});
	};

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
						<Layout>
							<Image source={Images.logo.banner} style={InnerStyles.logo} />
							<Form
								name={this.state.name}
								phone={this.state.phone}
								koordinator={this.state.koordinator}
								provinsi={this.state.provinsi}
								kabupaten={this.state.kabupaten}
								kecamatan={this.state.kecamatan}
								kelurahan={this.state.kelurahan}
								changeName={name => {
									this.setState({ name });
								}}
								changePhone={phone => {
									this.setState({ phone });
								}}
								changeKoordinator={koordinator => {
									this.setState({ koordinator });
								}}
								selectProvinsi={provinsi => {
									this.setState({ provinsi });
									this.findDaerahId(1, provinsi);
								}}
								selectKabupaten={kabupaten => {
									this.setState({ kabupaten });
									this.findDaerahId(2, kabupaten);
								}}
								selectKecamatan={kecamatan => {
									this.setState({ kecamatan });
									this.findDaerahId(3, kecamatan);
								}}
								selectKelurahan={kelurahan => {
									this.setState({ kelurahan });
								}}
								itemsProvinsi={this.state.itemsProvinsi}
								itemsKabupaten={this.state.itemsKabupaten}
								itemsKecamatan={this.state.itemsKecamatan}
								itemsKelurahan={this.state.itemsKelurahan}
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
						</Layout>
						<Layout>
							<ButtonForm label="Register" onPress={this.onPressRegister} />
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
