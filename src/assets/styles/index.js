import { StyleSheet } from 'react-native';
import Colors from '@app/assets/colors';
import strings from '../strings';

export default StyleSheet.create({
	backgroundDefault: {
		color: Colors.backgroudDefault,
		padding: 24,
	},
	shadowOn: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 2,
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
	noBorderInput: {
		backgroundColor: Colors.transparent,
		marginBottom: 24,
	},
	containerLeftHalfButton: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 24,
		alignSelf: 'flex-end',
	},
	imageMainMenu: {
		width: 32,
		height: 32,
		resizeMode: 'contain',
		alignSelf: 'center',
	},
	profileCandidate: {
		width: 80,
		height: 80,
		borderRadius: 2,
	},
	containerProfileCandidate: {
		width: 80,
		height: 80,
		borderRadius: 2,
		position: 'relative',
		top: -40,
		marginBottom: -40,
		elevation: 2,
	},
	input: {
		backgroundColor: Colors.transparent,
		marginBottom: 24,
	},
});
