import { TopUpScreen, ChangePasswordScreen } from "@app/screens"
import Color from "@app/assets/colors"

export default {
    TopUp: {
        screen: TopUpScreen,
        navigationOptions: {
            headerTitle: "Top Up",
            headerStyle: {
                backgroundColor: Color.primaryColor
            },
            headerTintColor: Color.white
        }
    },
    ChangePassword: {
        screen: ChangePasswordScreen,
        navigationOptions: {
            headerTitle: "Change Password",
            headerStyle: {
                backgroundColor: Color.primaryColor
            },
            headerTintColor: Color.white
        }
    }
}