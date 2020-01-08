import React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import Colors from '@app/assets/colors';

const LayoutAppbar = ({
	title,
	icon,
	onBackPress,
	style,
	children,
	...others
}) => (
	<>
		<Appbar.Header style={{ backgroundColor: Colors.white }}>
			{onBackPress !== null && (
				<Appbar.BackAction onPress={onBackPress} color={Colors.black4A} />
			)}
			<Appbar.Content title={title} color={Colors.black4A} />
			{icon !== null && <Appbar.Action icon={icon} />}
		</Appbar.Header>
		<View style={[{ padding: 24 }, style]} {...others}>
			{children}
		</View>
	</>
);
export default LayoutAppbar;
