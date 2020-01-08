import React from 'react';
import { Card, Paragraph, Button } from '@app/components';
import { StyleSheet } from 'react-native';
import Styles from '@app/assets/styles';
import Colors from '@app/assets/colors';

const CardNews = ({ title, description, link }) => (
	<Card style={styles.cardContainer}>
		<Card.Title title={title} titleStyle={Styles.font} />
		<Card.Content style={{ flex: 1 }}>
			<Paragraph style={Styles.font}>{description}</Paragraph>
		</Card.Content>
		<Card.Actions style={{ justifyContent: 'flex-end' }}>
			<Button
				labelStyle={[Styles.font, { color: Colors.primaryColor }]}
				onPress={() => console.log('PRESS')}
			>
				Selengkapnya
			</Button>
		</Card.Actions>
	</Card>
);

export default CardNews;

const styles = StyleSheet.create({
	cardContainer: { flex: 1, marginVertical: 16 },
});
