/* eslint-disable no-mixed-spaces-and-tabs */
import Colors from '@app/assets/colors';
import { ButtonForm } from '@app/components';
import React, { PureComponent } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
	label: String,
	icon: String,
};

class FilePicker extends PureComponent<Props> {
	render() {
		const { label, icon } = this.props;
		return (
			<ButtonForm
				label={label}
				// onPress={() => NavigationServices.navigate('Register')}
				onPress={() => console.log('upload file')}
				color={Colors.black4A}
				icon={
					icon
						? () => (
								<Icon
									name={icon}
									size={icon ? 24 : 0}
									color={Colors.white}
									style={{
										width: icon ? 32 : 0,
										textAlign: 'center',
										textAlignVertical: 'center',
										alignSelf: 'center',
										paddingTop: 2,
									}}
								/>
						  )
						: ''
				}
			/>
		);
	}
}

export default FilePicker;
