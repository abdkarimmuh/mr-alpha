import colors from '@app/assets/colors';
import strings from '@app/assets/strings';
import { theme } from '@app/themes';
import React, { PureComponent } from 'react';
import {
	Modal,
	ScrollView,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
	placeholder: String,
	data: Array,
	onValueChange: () => void,
	value: String,
	label: String,
};

export default class DropdownPicker extends PureComponent<Props> {
	state = {
		modalVisible: false,
		value: '',
		itemLabel: '',
	};

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

	render() {
		const { itemLabel } = this.state;
		const { placeholder, data, onValueChange, value, label } = this.props;
		return (
			<View>
				<Modal
					animationType="fade"
					transparent={true}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						this.setModalVisible(!this.state.modalVisible);
					}}
				>
					<TouchableWithoutFeedback
						onPress={() => {
							this.setModalVisible(!this.state.modalVisible);
						}}
					>
						<View
							style={{
								flex: 1,
								backgroundColor: 'rgba(52, 52, 52, 0.4)',
								justifyContent: 'center',
								padding: 16,
								paddingHorizontal: 24,
							}}
						>
							<View>
								<ScrollView
									contentContainerStyle={{
										paddingBottom: 10,
									}}
									style={{
										backgroundColor: '#fff',
										borderRadius: 3,
										paddingVertical: 10,
									}}
								>
									<Text
										style={{
											paddingHorizontal: 12,
											paddingVertical: 10,
											fontSize: 16,
											fontFamily: strings.fontPrimaryBold,
										}}
									>
										{placeholder}
									</Text>
									{data.map(item => (
										<TouchableOpacity
											onPress={() => {
												onValueChange(item.value);
												this.setState({ itemLabel: item.label });
												this.setModalVisible(!this.state.modalVisible);
											}}
											key={item.value}
											style={{
												paddingHorizontal: 12,
												paddingVertical: 10,
												flexDirection: 'row',
												alignItems: 'center',
												justifyContent: 'space-between',
												flexWrap: 'wrap',
											}}
										>
											<Text
												style={{
													width: '80%',
													fontSize: 16,
													flexWrap: 'wrap',
													color:
														value === item.value ? theme.brandPrimary : '#000',
												}}
											>
												{item.label}
											</Text>
										</TouchableOpacity>
									))}
								</ScrollView>
							</View>
						</View>
					</TouchableWithoutFeedback>
				</Modal>

				{/* show picker */}

				<View
					style={{
						marginVertical: 5,
						borderBottomWidth: 1,
						borderBottomColor: '#E0E0E0',
						paddingLeft: 16,
						paddingBottom: 5,
					}}
				>
					<Text
						style={{
							marginBottom: 8,
							fontSize: 10,
							color: colors.primaryColor,
							fontFamily: strings.fontPrimary,
						}}
					>
						{label}
					</Text>
					<TouchableOpacity
						activeOpacity={1}
						onPress={() => {
							this.setModalVisible(true);
						}}
						style={{
							height: theme.inputHeightBase,
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							// backgroundColor: 'red',
							paddingBottom: 5,
						}}
					>
						{!itemLabel && value ? (
							<Text style={{ width: '80%', fontFamily: strings.fontPrimary }}>
								{data.find(x => x.value === value).label}
							</Text>
						) : itemLabel ? (
							<Text style={{ width: '80%', fontFamily: strings.fontPrimary }}>
								{itemLabel}
							</Text>
						) : (
							<Text
								style={{
									width: '80%',
									opacity: 0.2,
									fontFamily: strings.fontPrimary,
								}}
							>
								{placeholder}
							</Text>
						)}

						<Icon
							name="caret-down"
							size={20}
							style={{ color: theme.colors.primary }}
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
