import React from 'react';
import { Text } from 'react-native';
import styles from './style';

const Detail = children => (
	<Text style={[styles.font, { color: '#FFF', fontWeight: 'bold' }]}>
		{children}
	</Text>
);

export default Detail;
