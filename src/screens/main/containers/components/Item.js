import React from 'react';
import { View, Image, Text } from 'react-native';
import Images from '@app/assets/images';

const getIndicator = (isExpanded, hasChildrenNodes, level, avatar) => {
	if (level <= 1) {
		if (!avatar) {
			return Images.avatar.avatarDefault;
		} else {
			return avatar;
		}
	} else if (!hasChildrenNodes) {
		return Images.icon.minus;
	} else if (isExpanded) {
		return Images.icon.chevronBottom;
	} else {
		return Images.icon.chevronRight;
	}
};

const Item = ({ isExpanded, hasChildrenNodes, level, node }) => (
	<View
		style={{
			marginLeft: 24 * level,
			flexDirection: 'row',
			alignItems: 'center',
		}}
	>
		<Image
			source={getIndicator(isExpanded, hasChildrenNodes, level, node.photo)}
			style={{
				width: level > 1 ? 20 : 35,
				height: level > 1 ? 20 : 35,
				resizeMode: 'contain',
				marginRight: 8,
				borderRadius: 1000,
			}}
		/>
		<Text style={{ fontSize: level > 1 ? 12 : 14 }}>{node.name}</Text>
	</View>
);

export default Item;
