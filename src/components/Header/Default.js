import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const Default = () => (
	<View style={{ flexDirection: 'row', marginLeft: 12 }}>
		<Text style={[styles.font, { fontWeight: 'bold' }]}>FreshBox</Text>
		<Text style={styles.font}> for Purchasing</Text>
	</View>
);

export default Default;
