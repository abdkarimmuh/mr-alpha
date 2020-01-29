import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Avatar, Paragraph, List } from '@app/components';
import Colors from '@app/assets/colors';
import Styles from '@app/assets/styles';

const ListComponent = ({ title, data, count }) => (
	<ScrollView contentContainerStyle={{ padding: 20 }}>
		<Card style={styles.cardContainer}>
			<Card.Content style={{ flex: 1 }}>
				<Paragraph style={Styles.font}>{title}</Paragraph>
				<Paragraph
					style={[
						Styles.font,
						{ fontWeight: 'bold', fontSize: 18, lineHeight: 21 },
					]}
				>
					{count}
				</Paragraph>
			</Card.Content>
		</Card>
		{data.map(item => (
			<List.Item
				key={item.id}
				title={item.name}
				titleStyle={Styles.font}
				style={{ marginLeft: -8, marginVertical: 8 }}
				left={() => (
					<Avatar.Text
						size={32}
						label="XD"
						style={[Styles.shadowOn, { marginRight: 16 }]}
					/>
				)}
			/>
		))}
	</ScrollView>
);

export default ListComponent;

const styles = StyleSheet.create({
	container: { flexDirection: 'column', margin: 16 },
	title: { textAlign: 'center', marginTop: 8 },
	cardContainer: { flex: 1, backgroundColor: Colors.white },
});
