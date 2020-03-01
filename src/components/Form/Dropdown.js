import React from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown as MaterialDropdown } from 'react-native-material-dropdown';

import Colors from '@app/assets/colors';

const Dropdown = ({ data, label, value, onChangeText, disabled = true }) => (
	<MaterialDropdown
		label={label}
		baseColor={Colors.gray}
		textColor={Colors.black}
		data={data}
		value={value}
		onChangeText={onChangeText}
		disabled={disabled}
		containerStyle={styles.container}
		itemCount={6}
		dropdownOffset={{ top: 16, left: 0 }}
		rippleInsets={{ top: 0, bottom: -8, left: -8, right: -8 }}
	/>
);

const styles = StyleSheet.create({
	container: {
		marginVertical: 8,
	},
});

export default Dropdown;
