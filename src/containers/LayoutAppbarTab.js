import React from 'react';
import { Appbar, Text } from 'react-native-paper';
import { TabView, TabBar } from 'react-native-tab-view';
import Colors from '@app/assets/colors';
import { Metrics } from '@app/themes';
import { NavigationServices } from '@app/services';
import { TouchableOpacity, Image, View } from 'react-native';
import Images from '@app/assets/images';

const navigateToMessage = () => NavigationServices.navigate('Message');

const renderTabBar = props => (
	<TabBar
		{...props}
		renderLabel={({ route, focused, color }) => (
			<Text style={{ color, fontSize: 12 }}>{route.title.toUpperCase()}</Text>
		)}
		activeColor={Colors.primaryColor}
		inactiveColor={Colors.black4A}
		indicatorStyle={{ backgroundColor: Colors.primaryColor }}
		style={{ backgroundColor: Colors.white }}
	/>
);

const LayoutAppbarTab = ({
	title,
	icon,
	index,
	routes,
	renderScene,
	onIndexChange,
	onPress,
	hasMessage,
	hasBack = false,
}) => (
	<>
		<Appbar.Header style={{ backgroundColor: Colors.white, elevation: 0 }}>
			{hasBack && (
				<Appbar.BackAction
					onPress={() => NavigationServices.goBack()}
					color={Colors.black4A}
				/>
			)}
			<Appbar.Content title={title} color={Colors.black4A} />
			<View style={{ marginRight: 8, flexDirection: 'row' }}>
				{hasMessage && (
					<TouchableOpacity style={{ padding: 8 }} onPress={navigateToMessage}>
						<Image
							source={Images.icon.email}
							style={{ width: 20, height: 20, resizeMode: 'contain' }}
						/>
					</TouchableOpacity>
				)}
				{/* {icon !== null && <Appbar.Action icon={icon} onPress={onPress} />} */}
				{icon !== null && (
					<TouchableOpacity style={{ padding: 8 }} onPress={onPress}>
						<Image
							source={icon}
							style={{ width: 20, height: 20, resizeMode: 'contain' }}
						/>
					</TouchableOpacity>
				)}
			</View>
		</Appbar.Header>
		<TabView
			renderTabBar={renderTabBar}
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={onIndexChange}
			initialLayout={Metrics.DEVICE_WIDTH}
		/>
	</>
);
export default LayoutAppbarTab;
