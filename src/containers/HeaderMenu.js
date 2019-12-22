import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { View, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import Color from "@app/assets/colors"
import { CustomMenu } from "@app/screens"
import { Badge } from "@app/components"
import NavigationServices from "@app/services/NavigationServices"
import AsyncStorage from "@app/services/AsyncStorage"

import NotifRedux from "@app/redux/notif"

type Props = {
    items: any,
}

class HeaderMenu extends PureComponent<Props> {

    constructor(props) {
        super(props)
        this.state = {
            notifications: [],
            itemNotification: 0,
            isFetchingNotifications: true
        }
    }

    componentDidMount() {
    }

    componentDidUpdate() {
        this.countNotifications(this.props.items)
    }

    countNotifications = (items) => {
        this.setState({ itemNotification: 0 })
        let count = 0

        try {
            if (items != null || items.length != 0) {
                items.forEach(element => {
                    if (element.read_at == null) {
                        count = count + 1
                        this.setState({ itemNotification: count })
                    }
                })
            }
        } catch (error) {
            console.log("Error : ", error)
        }
    }

    pressNotifications = () => {
        NavigationServices.navigate("Notifications", { title: "Notifications" })
    }

    pressChangePassword = () => {
        console.log("Change Password")
        NavigationServices.navigate("ChangePassword")
    }

    pressLogout = async () => {
        await AsyncStorage.StoreData("access_token", "")
        NavigationServices.resetStackNavigate(["Auth"])
    }

    render() {
        return (
            <View style={{ flexDirection: "row", marginRight: 12 }}>
                <TouchableOpacity onPress={() => this.pressNotifications(this.state.notifications)}>
                    <View style={{ padding: 12, flexDirection: "row" }}>
                        <Icon
                            name="bell"
                            color={Color.white}
                            size={18}
                        />
                        {this.state.itemNotification != 0 && <Badge style={{ marginLeft: -6 }} size={14}>{this.state.itemNotification}</Badge>}
                    </View>
                </TouchableOpacity>
                <CustomMenu
                    option1Click={() => this.pressChangePassword()}
                    option2Click={() => this.pressLogout()}
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    items: NotifRedux.selectors.item(state),
})

export default connect(mapStateToProps, null)(HeaderMenu)