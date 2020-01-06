import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import Images from '@app/assets/images';
import { Container, Loading, Checkbox } from '@app/components';
import Color from '@app/assets/colors';
import { EmptyData } from '@app/containers';

import PickRedux from '@app/redux/pick';
import { NavigationServices } from '@app/services';

const styles = StyleSheet.create({
	containerHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 24,
	},
	containerBtnTopUp: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 6,
		width: 92,
		borderRadius: 2,
		opacity: 4,
		justifyContent: 'center',
	},
	txtHeader: {
		fontSize: 16,
		fontWeight: 'bold',
		color: Color.grey,
		marginRight: 16,
	},
	containerItem: {
		flex: 1,
		paddingHorizontal: 24,
		paddingVertical: 12,
		backgroundColor: Color.transparent,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	txtItemName: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
});

type Props = {
	items: any,
	setItems: any => void,
};

class ListAssign extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			colorBtn: Color.dividerColor,
			qtyItemCheck: 0,
			isFetchingProcurement: true,
			item: [],
			data: null,
			refreshing: false,
		};
	}

	componentDidMount() {}

	pressPick = () => {
		if (this.state.qtyItemCheck == 0) {
			return alert('Item belum dipilih');
		} else {
			var itemsCheck = [];
			this.props.items.forEach(data => {
				if (data.check) {
					itemsCheck = itemsCheck.concat(data);
				}
			});

			NavigationServices.navigate('Pick', { data: JSON.stringify(itemsCheck) });
		}
	};

	changeButton = () => {
		if (this.state.qtyItemCheck == 0) {
			return Color.dividerColor;
		} else {
			return Color.primaryColor;
		}
	};

	checkItems = ({ data, index }) => {
		let itemCopy = JSON.parse(JSON.stringify(this.props.items));
		itemCopy[index].check = !data.check;
		this.props.setItems(itemCopy);

		let qty = this.state.qtyItemCheck;
		if (data.check) {
			this.setState({
				qtyItemCheck: qty + 1,
			});
		} else {
			this.setState({
				qtyItemCheck: qty - 1,
			});
		}
	};

	renderItems = () => {
		if (this.props.isFetching) {
			this.setState({ qtyItemCheck: 0 });
			return (
				<Container>
					<Loading />
				</Container>
			);
		} else if (this.props.items === null || this.props.items.length === 0) {
			return (
				<Container>
					<EmptyData />
				</Container>
			);
		} else {
			return this.props.items.map((data, index) => (
				<TouchableOpacity
					onPress={() => this.checkItems({ data, index })}
					key={index}
				>
					<View
						style={[
							styles.containerItem,
							{ backgroundColor: data.check ? Color.white : Color.transparent },
						]}
					>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Checkbox
								status={data.check ? 'checked' : 'unchecked'}
								// onPress={() => this.checkItems({ data, index })}
							/>
							<View style={{ marginLeft: 8 }}>
								<Text style={styles.txtItemName}>{data.name}</Text>
								<View style={{ flexDirection: 'row' }}>
									<Text>{data.qty}</Text>
									<Text> {data.uom}</Text>
								</View>
							</View>
						</View>
					</View>
				</TouchableOpacity>
			));
		}
	};

	render() {
		return (
			<>
				<Container>
					<View style={styles.containerHeader}>
						<Text style={styles.txtHeader}>Purchase List</Text>
						<TouchableOpacity onPress={() => this.pressPick()}>
							<View
								style={[
									styles.containerBtnTopUp,
									{ backgroundColor: this.changeButton() },
								]}
							>
								<Image
									source={Images.icon.iconCart}
									style={{ width: 16, height: 16, resizeMode: 'contain' }}
								/>
								<Text style={{ color: Color.white, marginLeft: 12 }}>BUY</Text>
							</View>
						</TouchableOpacity>
					</View>
				</Container>
				{this.renderItems()}
			</>
		);
	}
}

const mapStateToProps = state => ({
	items: PickRedux.selectors.item(state),
});

const mapDispatchToProps = dispatch => ({
	setItems: data => dispatch(PickRedux.actions.setData(data)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ListAssign);
