import React from 'react';
import { Card, Paragraph, Button } from '@app/components';
import { StyleSheet } from 'react-native';
import Styles from '@app/assets/styles';
import Colors from '@app/assets/colors';
import { NavigationServices } from '@app/services';
import strings from '~/assets/strings';

const CardNews = ({ title, description, link, data }) => (
	<Card
		onPress={() => NavigationServices.navigate('NewsDetail', data)}
		style={styles.cardContainer}
	>
		<Card.Title
			title={title}
			titleStyle={{
				color: Colors.black4A,
				fontSize: 14,
				fontFamily: strings.fontPrimaryBold,
			}}
		/>
		<Card.Content style={{ flex: 1 }}>
			<Paragraph numberOfLines={3} style={Styles.font}>
				{description}
			</Paragraph>
		</Card.Content>
		<Card.Actions style={{ justifyContent: 'flex-end' }}>
			<Button
				labelStyle={[Styles.font, { color: Colors.primaryColor }]}
				onPress={() => NavigationServices.navigate('NewsDetail', data)}
			>
				Selengkapnya
			</Button>
		</Card.Actions>
	</Card>
);

export default CardNews;

const styles = StyleSheet.create({
	cardContainer: { flex: 1, marginVertical: 8 },
});
