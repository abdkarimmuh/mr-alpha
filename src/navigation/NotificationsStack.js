import { NotificationsScreen, DetailNotificationsScreen } from "@app/screens"
import Color from "@app/assets/colors"

export default {
    Notifications: {
        screen: NotificationsScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: `${navigation.getParam("title")}`,
            headerStyle: {
                backgroundColor: Color.primaryColor
            },
            headerTintColor: Color.white
        })
    },
    DetailNotifications: {
        screen: DetailNotificationsScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: `${navigation.getParam("title")}`,
            headerStyle: {
                backgroundColor: Color.primaryColor
            },
            headerTintColor: Color.white
        })
    }
}