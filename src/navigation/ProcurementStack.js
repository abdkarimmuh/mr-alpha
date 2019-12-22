import { SubmitProcurementScreen } from "@app/screens"
import Color from "@app/assets/colors"

export default {
    SubmitProcurement: {
        screen: SubmitProcurementScreen,
        navigationOptions: {
            headerTitle: "Submit Procurement",
            headerStyle: {
                backgroundColor: Color.primaryColor
            },
            headerTintColor: Color.white
        }
    },
}