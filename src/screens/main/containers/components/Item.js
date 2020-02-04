import React from 'react';
import { View } from 'react-native';
import { Text } from '@app/components';

const getIndicator = (isExpanded, hasChildrenNodes) => {
	if (!hasChildrenNodes) {
		return '-';
	} else if (isExpanded) {
		return '\\/';
	} else {
		return '>';
	}
};

const Item = ({ isExpanded, hasChildrenNodes, level, node }) => (
	<View>
		<Text
			style={{
				marginLeft: 25 * level,
			}}
		>
			{getIndicator(isExpanded, hasChildrenNodes)} {node.name}
		</Text>
	</View>
);

export default Item;
