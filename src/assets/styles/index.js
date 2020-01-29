import { StyleSheet } from 'react-native';
import Colors from '@app/assets/colors';
import strings from '../strings';

export default StyleSheet.create({
	shadowOn: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 4,
	},
	whiteBackground: {
		backgroundColor: Colors.white,
	},
	font: {
		lineHeight: 14,
		fontSize: 12,
		color: Colors.black4A,
		fontFamily: strings.fontPrimary,
	},
});
