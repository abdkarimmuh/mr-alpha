import React, { PureComponent } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Appbar, List, RippleEffect, Divider, Avatar } from '@app/components';
import Colors from '@app/assets/colors';
import Styles from '@app/assets/styles';

type Props = {};

const Menu = [
	{ id: '1', title: 'Edit Profil', icon: 'gear' },
	{ id: '2', title: 'Ganti Password', icon: 'lock' },
	{ id: '3', title: 'Menjadi Koordinator', icon: 'group' },
	{ id: '4', title: 'Tentang Aplikasi', icon: 'book' },
	{ id: '5', title: 'Logout', icon: 'camera' },
];
class ProfilScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			profile: [
				{ id: '1', title: 'Nama', description: 'Budi' },
				{ id: '2', title: 'Nomor Telepon', description: '082152368795' },
			],
		};
	}

	componentDidMount() {}

	render() {
		const { profile } = this.state;
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<Appbar.Header style={{ backgroundColor: Colors.white }}>
					<Appbar.Content title="Profil" color={Colors.black4A} />
				</Appbar.Header>
				<View style={{ flexDirection: 'column', padding: 24 }}>
					<Avatar.Text
						size={80}
						label="XD"
						style={[Styles.shadowOn, { alignSelf: 'center' }]}
					/>
					{profile.map(item => (
						<List.Item
							key={item.id}
							title={item.title}
							description={item.description}
							titleStyle={Styles.font}
							descriptionStyle={InnerStyles.font}
							style={{ padding: 0 }}
						/>
					))}
					<Divider style={{ marginTop: 16, marginBottom: 24 }} />
					{Menu.map(item => (
						<RippleEffect key={item.id} onPress={() => console.log('Pressed')}>
							<List.Item
								title={item.title}
								titleStyle={Styles.font}
								left={props => <List.Icon {...props} icon={item.icon} />}
								style={{ padding: 0 }}
							/>
						</RippleEffect>
					))}
				</View>
			</SafeAreaView>
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
