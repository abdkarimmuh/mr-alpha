import { PickScreen } from "@app/screens"
import Color from "@app/assets/colors"

export default {
    Pick: {
        screen: PickScreen,
        navigationOptions: {
            headerTitle: "Pick Items",
            headerStyle: {
                backgroundColor: Color.primaryColor
            },
            headerTintColor: Color.white
        }
    },
}