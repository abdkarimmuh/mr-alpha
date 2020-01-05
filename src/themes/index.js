import { DefaultTheme, DarkTheme } from 'react-native-paper';
import Metrics from './metrics';
import Color from '@app/assets/colors';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: Color.primaryColor,
		accent: Color.accentColor,
		borderGrey: Color.borderGrey,
		separatorGrey: Color.separatorGrey,
		textGrey: Color.secondaryTextColor,
	},
};

const darkTheme = {
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
		primary: Color.primaryColor,
		accent: Color.accentColor,
		borderGrey: Color.borderGrey,
		separatorGrey: Color.separatorGrey,
		textGrey: Color.secondaryTextColor,
		surface: Color.white,
	},
};

export { theme, Metrics, darkTheme };
