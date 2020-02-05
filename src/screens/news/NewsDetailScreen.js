import React, { PureComponent } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Title, Paragraph, Text } from '@app/components';
import { LayoutAppbar } from '@app/containers';
import { NavigationServices } from '@app/services';
import Styles from '@app/assets/styles';
import Colors from '@app/assets/colors';

type Props = {};

class NewsDetailScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		const { navigation } = this.props;
		this.state = {
			title: navigation.state.params.title,
			description: navigation.state.params.description,
			author: navigation.state.params.author,
			date: navigation.state.params.date,
		};
	}

	componentDidMount() { }

	render() {
		const { title, description, author, date } = this.state;
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<LayoutAppbar
					title="Detail Berita"
					hasBack={() => NavigationServices.goBack()}
					style={{ padding: 0 }}
				>
					<ScrollView
						contentContainerStyle={{ padding: 24 }}
					>
						<Title style={{ color: Colors.black4A, marginBottom: 24 }}>{title}</Title>
						<View style={{ flexDirection: 'row', marginVertical: 12 }}>
							<Text style={[Styles.font, { fontWeight: 'bold' }]}>
								{author}
							</Text>
							<Text style={[Styles.font, { marginHorizontal: 4 }]}>|</Text>
							<Text style={Styles.font}>{date}</Text>
						</View>
						<Paragraph style={Styles.font}>{description}</Paragraph>
					</ScrollView>
				</LayoutAppbar>
			</SafeAreaView>
		);
	}
}

export default NewsDetailScreen;
