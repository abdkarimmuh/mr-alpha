import Colors from '@app/assets/colors';
import { NavigationServices } from '@app/services';
import React from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import strings from '@app/assets/strings';

const LayoutAppbar = ({
	title,
	icon,
	hasBack = false,
	style,
	children,
	isScrolling = true,
	...others
}) => (
	<>
		<View style={{ flex: 1 }}>
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
			{isScrolling ? (
				<ScrollView
					contentContainerStyle={[{ padding: 16, marginBottom: 30 }, style]}
					{...others}
				>
					{children}
				</ScrollView>
			) : (
				<>{children}</>
			)}
		</View>
	</>
);
export default LayoutAppbar;
