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

	componentDidMount() {}

	render() {
		const { title, description, author, date } = this.state;
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<LayoutAppbar
					title="Detail Berita"
					onBackPress={() => NavigationServices.goBack()}
					style={{ padding: 0 }}
				>
					<ScrollView
						contentContainerStyle={{ padding: 24, paddingBottom: 80 }}
					>
						<Title style={{ color: Colors.black4A }}>{title}</Title>
						<View style={{ flexDirection: 'row', marginVertical:8 }}>
							<Text style={[Styles.font, { fontWeight: 'bold' }]}>
								{author}
							</Text>
							<Text style={[Styles.font, { marginHorizontal: 4 }]}>|</Text>
							<Text style={Styles.font}>{date}</Text>
						</View>
						<Paragraph style={Styles.font}>
							Contrary to popular belief, Lorem Ipsum is not simply random text.
							It has roots in a piece of classical Latin literature from 45 BC,
							making it over 2000 years old. Richard McClintock, a Latin
							professor at Hampden-Sydney College in Virginia, looked up one of
							the more obscure Latin words, consectetur, from a Lorem Ipsum
							passage, and going through the cites of the word in classical
							literature, discovered the undoubtable source. Lorem Ipsum comes
							from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
							Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
							BC. This book is a treatise on the theory of ethics, very popular
							during the Renaissance. The first line of Lorem Ipsum, "Lorem
							ipsum dolor sit amet..", comes from a line in section 1.10.32. The
							standard chunk of Lorem Ipsum used since the 1500s is reproduced
							below for those interested. Sections 1.10.32 and 1.10.33 from "de
							Finibus Bonorum et Malorum" by Cicero are also reproduced in their
							exact original form, accompanied by English versions from the 1914
							translation by H. Rackham.
						</Paragraph>
					</ScrollView>
				</LayoutAppbar>
			</SafeAreaView>
		);
	}
}

export default NewsDetailScreen;
