import React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import Colors from '@app/assets/colors';
import { NavigationServices } from '@app/services';
import strings from '~/assets/strings';

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
			<Appbar.Content
				title={title}
				color={Colors.black4A}
				style={{ fontFamily: strings.fontPrimary }}
			/>
			{icon !== null && <Appbar.Action icon={icon} />}
		</Appbar.Header>
		<View style={[{ padding: 16 }, style]} {...others}>
			{children}
		</View>
	</>
);
export default LayoutAppbar;
