import {
	MessageScreen,
	DetailMessageScreen,
	NewMessageScreen,
} from '@app/screens';

export default {
	Message: {
		screen: MessageScreen,
		navigationOptions: {
			headerShown: false,
		},
	},
	DetailMessage: {
		screen: DetailMessageScreen,
		navigationOptions: {
			headerShown: false,
		},
	},
	NewMessage: {
		screen: NewMessageScreen,
		navigationOptions: {
			headerShown: false,
		},
	},
};
