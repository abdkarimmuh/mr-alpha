import Colors from '@app/assets/colors';
import Styles from '@app/assets/styles';
import Images from '@app/assets/images';
import { Divider, Text } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import { NavigationServices } from '@app/services';
import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, Image, TouchableOpacity, View } from 'react-native';

const navigateToSettings = name => NavigationServices.navigate(name);

type Props = {};

const Menu = [
	{
		id: '1',
		title: 'Edit Profil',
		icon: Images.icon.settings,
		nav: 'EditProfile',
	},
	{
		id: '2',
		title: 'Ganti Password',
		icon: Images.icon.lock,
		nav: 'ChangePass',
	},
	{
		id: '3',
		title: 'Menjadi Koordinator',
		icon: Images.icon.people,
		nav: 'BeCoordinator',
	},
	{
		id: '4',
		title: 'Tentang Aplikasi',
		icon: Images.icon.github,
		nav: 'AboutApp'
	},
];
class ProfilScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			profile: [
				{ id: '1', title: 'Nama', value: 'Budi' },
				{ id: '2', title: 'Nomor Telepon', value: '082152368795' },
			],
		};
	}

	componentDidMount() { }

	render() {
		const { profile } = this.state;
		return (
			<LayoutAppbar title="Profil" style={{ padding: 0 }}>
				<ScrollView contentContainerStyle={{ padding: 24 }}>
					<Text style={{ textAlign: 'center', marginBottom: 16 }}>
						<Text>Anda Seorang </Text>
						<Text bold>Relawan</Text>
					</Text>
					<Image source={Images.avatar.avatarWhite} style={ { width: 80, height: 80, alignSelf: 'center', borderRadius: 40, marginBottom: 24 }} />
					{profile.map(item => (
						<View style={{ marginBottom: 16 }} key={item.id}>
							<Text style={Styles.font}>{item.title}</Text>
							<Text style={InnerStyles.font}>{item.value}</Text>
						</View>
					))}
					<Divider style={{ marginBottom: 24 }} />
					{Menu.map(item => (
						<TouchableOpacity
							onPress={() => navigateToSettings(item.nav)}
							key={item.id}
						>
							<View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 24 }}>
								<Image source={item.icon} style={{ width: 20, height: 20, resizeMode: 'contain', marginRight: 12 }} />
								<Text style={Styles.font}>{item.title}</Text>
							</View>
						</TouchableOpacity>
					))}

					<TouchableOpacity onPress={() => console.log('logout')}>
						<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
							<Image source={Images.icon.logout} style={{ width: 20, height: 20, resizeMode: 'contain', marginRight: 12 }} />
							<Text style={Styles.font}>Log Out</Text>
						</View>
					</TouchableOpacity>
				</ScrollView>
			</LayoutAppbar>
		);
	}
}

export default ProfilScreen;

const InnerStyles = StyleSheet.create({
	font: {
		fontWeight: 'bold',
		fontSize: 14,
		lineHeight: 16,
		marginVertical: 4,
		color: Colors.black4A,
	},
});
