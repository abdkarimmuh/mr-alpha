import Strings from '@app/assets/strings';
import Colors from '@app/assets/colors';
import React from 'react';
import { Text } from 'react-native-paper';

type Props = {
	style: Any,
	others: any,
	bold: Boolean,
	title: Boolean,
	caption: Boolean,
	white: Boolean,
	medium: Boolean,
	tiny: Boolean,
	warning: Boolean,
};

const TextBold = ({
	medium,
	tiny,
	white,
	title,
	caption,
	bold,
	style,
	warning,
	...others
}: Props) => (
	<Text
		style={[
			style,
			{
				fontFamily:
					bold || title ? Strings.fontPrimaryBold : Strings.fontPrimary,
				fontSize: title ? 18 : medium ? 16 : tiny ? 12 : 14,
				color: caption
					? Colors.grey
					: white
					? Colors.white
					: warning
					? Colors.red
					: Colors.black4A,
			},
		]}
		{...others}
	/>
);

export default TextBold;
