import { DefaultTheme, DarkTheme } from 'react-native-paper';
import Metrics from './metrics';
import Colors from '@app/assets/colors';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: Colors.primaryColor,
		accent: Colors.accentColor,
		borderGrey: Colors.borderGrey,
		separatorGrey: Colors.separatorGrey,
		textGrey: Colors.secondaryTextColor,
	},
};

const darkTheme = {
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
		primary: Colors.primaryColor,
		accent: Colors.accentColor,
		borderGrey: Colors.borderGrey,
		separatorGrey: Colors.separatorGrey,
		textGrey: Colors.secondaryTextColor,
		surface: Colors.white,
	},
};

export { theme, Metrics, darkTheme };
