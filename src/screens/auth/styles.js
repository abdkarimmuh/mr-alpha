import { StyleSheet } from 'react-native';
import Colors from '@app/assets/colors';
import { Metrics } from '@app/themes';

export default StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		paddingVertical: 8,
		backgroundColor: Colors.backgroudDefault,
		minHeight: Metrics.DEVICE_HEIGHT,
	},
	boldText: { fontWeight: 'bold', color: Colors.primaryColor, marginLeft: 4 },
	logo: {
		width: 200,
		height: 100,
		resizeMode: 'contain',
		alignSelf: 'center',
		marginBottom: 12,
	},
	captionContainer: {
		flexDirection: 'row',
		alignSelf: 'center',
		marginTop: 24,
	},
	containerTermReference: { flexDirection: 'row' },
	textTermReference: { width: Metrics.DEVICE_WIDTH - 84 },
});
