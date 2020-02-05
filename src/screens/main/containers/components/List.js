import React from 'react';
import { ScrollView, StyleSheet, Image, View, Text } from 'react-native';
import { Card, Avatar, Title, Paragraph, List } from '@app/components';
import Colors from '@app/assets/colors';
import Styles from '@app/assets/styles';
import Images from '@app/assets/images';

const ListComponent = ({ title, data, count }) => (
	<ScrollView contentContainerStyle={Styles.backgroundDefault}>
		<Card style={styles.cardContainer}>
			<Paragraph style={Styles.font}>{title}</Paragraph>
			<Title style={{ fontWeight: 'bold', fontSize: 24 }} >{count}</Title>
		</Card>
		{data.map((item, index) => (
			<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 24 }} key={index}>
				<View style={[Styles.shadowOn, { width: 32, height: 32, borderRadius: 16, marginRight: 12 }]}>
					<Image source={Images.dummy.oneToOne} style={{ width: 32, height: 32, resizeMode: 'cover', borderRadius: 16 }} />
				</View>
				<Text style={Styles.font}>{item.name}</Text>
			</View>
		))}
	</ScrollView>
);

export default ListComponent;

const styles = StyleSheet.create({
	container: { flexDirection: 'column', margin: 16 },
	title: { textAlign: 'center', marginTop: 8 },
	cardContainer: { backgroundColor: Colors.white, padding: 16, marginBottom: 8 },
});
