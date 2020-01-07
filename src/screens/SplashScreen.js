import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationServices, AsyncStorage } from '@app/services';
import { Api } from '@app/api';

import Logo from '@app/assets/images';
import Colors from '@app/assets/colors';
import { Text } from '@app/components';

import UserRedux from '@app/redux/user';

type Props = {
	setData: any => void,
	setToken: any => void,
};

class SplashScreen extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			isFetching: true,
		};
	}

	componentDidMount() {
		setTimeout(this.checkToken, 3000);
		// this.checkToken();
	}

	checkToken = async () => {
		// let token = await AsyncStorage.FetchData('access_token');

		// if (token === null) {
		this.setState({ isFetching: false });
		this.goToAuth();
		// } else {
		//   this.props.setToken(token);
		//   this.getUser(token);
		// }
	};

	goToAuth = () => {
		NavigationServices.resetStackNavigate(['Auth']);
	};

	goToMain = () => {
		NavigationServices.resetStackNavigate(['Main']);
	};

	getUser = async token => {
		this.setState({ isFetching: true });
		Api.get()
			.user(token)
			.then(res => {
				setTimeout(() => {
					this.setState({ isFetching: false });
					if (res.status === 200) {
						this.props.setData(res.data.data);
						this.goToMain();
					} else {
						this.goToAuth();
					}
				}, 3000);
			})
			.catch(error => {
				console.error('ERROR', error);
				this.setState({ isFetching: false });
				this.goToAuth();
			});
	};

	loading = () => {
		if (this.state.isFetching) {
			return <ActivityIndicator size="large" color={Colors.primaryColor} />;
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<Image source={Logo.logo.logo} style={styles.image} />
				<View style={styles.caption}>
					{this.loading()}
					<View style={{ flexDirection: 'row', paddingTop: 24 }}>
						<Text>Aplikasi Manajemen </Text>
						<Text style={{ fontWeight: 'bold' }}>Relawan</Text>
					</View>
				</View>
			</View>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	setData: data => dispatch(UserRedux.actions.setData({ data })),
	setToken: data => dispatch(UserRedux.actions.setToken(data)),
});

export default connect(
	null,
	mapDispatchToProps,
)(SplashScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: Colors.backgroudDefault,
	},
	image: {
		width: 200,
		height: 200,
		resizeMode: 'contain',
		alignSelf: 'center',
	},
	title: {
		alignSelf: 'center',
		paddingTop: 24,
		fontSize: 32,
		color: Colors.primaryColor,
		fontWeight: 'bold',
	},
	caption: {
		position: 'absolute',
		bottom: 0,
		alignSelf: 'center',
		marginBottom: 24,
	},
});
