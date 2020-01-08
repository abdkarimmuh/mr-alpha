import React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import Colors from '@app/assets/colors';
import { NavigationServices } from '@app/services';

const LayoutAppbar = ({
	title,
	icon,
	hasBack = false,
	style,
	children,
	...others
}) => (
	<>
		<Appbar.Header style={{ backgroundColor: Colors.white }}>
			{hasBack && (
				<Appbar.BackAction
					onPress={() => NavigationServices.goBack()}
					color={Colors.black4A}
				/>
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
