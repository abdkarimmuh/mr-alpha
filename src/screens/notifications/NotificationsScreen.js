import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import Color from "@app/assets/colors"
import { Container } from "@app/components"
import { EmptyData } from "@app/containers"
import { NavigationServices } from "@app/services"
import { Api } from "@app/api"

import NotifRedux from "@app/redux/notif"
import UserRedux from "@app/redux/user"

const styles = StyleSheet.create({
    containerNotifications: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    txtTitle: { fontSize: 16, fontWeight: "bold", width: "100%", marginBottom: 4 },
    txtDate: { color: Color.grey, fontStyle: "italic", fontSize: 12 }
})

type Props = {
    token: string,
    items: any,
    setNotif: any => void,
    resetNotif: any => void,
}

class NotificationsScreen extends PureComponent<Props> {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
    }


    pressDetail = (data) => {
        this.postReadNotif(data)
    }

    postReadNotif = async (data) => {
        Api.post()
            .asNotif(this.props.token, data.id)
            .then((res) => {
                if (res.status === 200) {
                    this.props.resetNotif()
                    this.props.setNotif(res.data.data)
                    NavigationServices.navigate("DetailNotifications", { title: "Detail Notifications", id: data.id, status: data.status })
                }
                console.log("Respon Notif : ", res)
            })
            .catch(error => {
                console.log("ERROR", error)
                this.setState({ error: true })
            })

    }

    renderNavigations = () => (
        this.props.items.map((data, index) => (
            <TouchableOpacity
                key={index}
                onPress={() => this.pressDetail(data)}>
                <Container style={{ backgroundColor: data.read_at == null ? Color.white : Color.transparent }}>
                    <Text numberOfLines={1} style={styles.txtTitle}>{data.message}</Text>
                    <View style={styles.containerNotifications}>
                        <Text style={{ fontSize: 12 }}>No Procurement Order : {data.procurement_no}</Text>
                        <Text style={styles.txtDate}>{data.date}</Text>
                    </View>
                </Container>
            </TouchableOpacity>
        ))
    )

    render() {
        if (this.props.items == null || this.props.items.length == 0) {
            return (
                <Container style={{ backgroundColor: Color.backgroudDefault, flex: 1 }}>
                    <EmptyData />
                </Container>
            )
        } else {
            return (
                <ScrollView style={{ backgroundColor: Color.backgroudDefault }}>
                    {this.renderNavigations()}
                </ScrollView>
            )
        }
    }
}

const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state),
    items: NotifRedux.selectors.item(state),
})

const mapDispatchToProps = dispatch => ({
    setNotif: data => dispatch(NotifRedux.actions.setData(data)),
    resetNotif: () => dispatch(NotifRedux.actions.resetNotif()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsScreen)