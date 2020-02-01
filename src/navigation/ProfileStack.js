import {
	ProfilScreen,
	ChangePasswordScreen,
	EditProfileScreen,
	BeCoordinatorScreen,
	AboutAppScreen,
} from '@app/screens';
import { createStackNavigator } from 'react-navigation-stack';

const ProfileStack = createStackNavigator(
	{
		Profile: ProfilScreen,
		ChangePass: ChangePasswordScreen,
		EditProfile: EditProfileScreen,
		BeCoordinator: BeCoordinatorScreen,
		AboutApp: AboutAppScreen,
	},
	{
		headerMode: 'none',
	},
);

export default ProfileStack;
