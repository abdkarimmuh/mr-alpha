import Colors from '@app/assets/colors';
import styles from '@app/assets/styles';
import { ButtonForm, Text } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import { NavigationServices } from '@app/services';
import React, { Component } from 'react';
import { View } from 'react-native';

const goBack = () => NavigationServices.goBack();

class BeCoordinatorScreen extends Component {
	render() {
		return (
			<LayoutAppbar hasBack title="Update Koordinator">
				<Text style={{ textAlign: 'center', marginBottom: 20 }}>
					Upload KTP Anda agar akun anda dapat diupgrade menjadi koordinator
				</Text>

				<Text caption tiny>
					Upload KTP Anda
				</Text>
				<ButtonForm label="Upload KTP" />

				<View style={styles.containerLeftHalfButton}>
					<ButtonForm
						label="Batal"
						color={Colors.borderGrey}
						onPress={goBack}
					/>
					<View style={{ width: 10 }} />
					<ButtonForm
						label="Simpan"
						// onPress={() => NavigationServices.resetStackNavigate(['Main'])}
					/>
				</View>
			</LayoutAppbar>
		);
	}
}

export default BeCoordinatorScreen;
