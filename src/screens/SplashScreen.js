import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { Api } from '@app/api';
import Colors from '@app/assets/colors';
import Logo from '@app/assets/images';
import Styles from '@app/assets/styles';
import { Text, ActivityIndicator } from '@app/components';
import UserRedux from '@app/redux/user';
import { NavigationServices, AsyncStorage } from '@app/services';

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
		this.goTo('Guest');
		// } else {
		//   this.props.setToken(token);
		//   this.getUser(token);
		// }
	};

	goTo = screen => {
		NavigationServices.resetStackNavigate([screen]);
	};

	// getUser = async token => {
	// 	this.setState({ isFetching: true });
	// 	Api.get()
	// 		.user(token)
	// 		.then(res => {
	// 			setTimeout(() => {
	// 				this.setState({ isFetching: false });
	// 				if (res.status === 200) {
	// 					this.props.setData(res.data.data);
	// 					this.goTo('Main');
	// 				} else {
	// 					this.goTo('Auth');
	// 				}
	// 			}, 3000);
	// 		})
	// 		.catch(error => {
	// 			console.error('ERROR', error);
	// 			this.setState({ isFetching: false });
	// 			this.goTo('Auth');
	// 		});
	// };

	render() {
		const { isFetching } = this.state;
		return (
			<View style={styles.container}>
				<Image source={Logo.logo.logo} style={styles.image} />
				<View style={styles.caption}>
					{isFetching && (
						<ActivityIndicator size="large" color={Colors.primaryColor} />
					)}
					<View style={{ flexDirection: 'row', paddingTop: 24 }}>
						<Text style={Styles.font}>Aplikasi Manajemen</Text>
						<Text style={[Styles.font, { fontWeight: 'bold', marginLeft: 3 }]}>
							Relawan
						</Text>
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
	caption: {
		position: 'absolute',
		bottom: 0,
		alignSelf: 'center',
		marginBottom: 24,
	},
});
