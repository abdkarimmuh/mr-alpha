import React from 'react';
import { View, Image, Text } from 'react-native';
import Images from '@app/assets/images';


const getIndicator = (isExpanded, hasChildrenNodes) => {
	if (!hasChildrenNodes) {
		return Images.icon.minus;
	} else if (isExpanded) {
		return Images.icon.chevronBottom;
	} else {
		return Images.icon.chevronRight;
	}
};

const Item = ({ isExpanded, hasChildrenNodes, level, node }) => (
	<View style={{ marginLeft: 24 * level, flexDirection: 'row', alignItems: 'center' }}>
		<Image source={getIndicator(isExpanded, hasChildrenNodes)} style={{ width: 20, height: 20, resizeMode: 'contain', marginRight: 8 }} />
		<Text>{node.name}</Text>
	</View>
);

export default Item;
