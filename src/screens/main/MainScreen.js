import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { View, Image, StyleSheet, ScrollView, Text, TouchableOpacity, SafeAreaView, RefreshControl, ToastAndroid } from "react-native"
import { NavigationServices, AsyncStorage } from "@app/services"

import Color from "@app/assets/colors"
import { Card } from "@app/components"
import { ListAssign } from "@app/screens"
import Images from "@app/assets/images"
import { Api } from "@app/api"
import Utils from "@app/utils"

import UserRedux from "@app/redux/user"
import PickRedux from "@app/redux/pick"
import NotifRedux from "@app/redux/notif"

const styles = StyleSheet.create({
    containerScroll: { flex: 1, backgroundColor: Color.backgroudDefault },
    containerHeader: { flexDirection: "row", alignItems: "center", paddingHorizontal: 24, paddingTop: 8, paddingBottom: 60, backgroundColor: Color.primaryColor },
    imgHeader: { width: 50, height: 50, marginRight: 12 },
    txtHeaderWelcome: { fontSize: 15, fontWeight: "300", color: Color.white },
    txtheaderName: { fontSize: 18, fontWeight: "bold", color: Color.white },
    containerTopUp: { position: "relative", top: -42, width: "100%", paddingHorizontal: 24, marginBottom: -42 },
    containerCardTopUp: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
    containerBtnTopUp: { flexDirection: "row", alignItems: "center", paddingVertical: 8, paddingHorizontal: 12, backgroundColor: Color.black4A, borderRadius: 2, opacity: 4 },
    containerBtn: { width: 14, height: 14, resizeMode: "contain" },
    txtBtn: { color: Color.white, marginLeft: 12, fontSize: 14 }
})

type Props = {
    token: string,
    id: integer,
    name: string,
    email: string,
    saldo: integer,
    items: any[],
    setUser: any => void,
    setPick: any => void,
    setNotif: any => void,
    resetUser: any => void,
    resetPick: any => void,
    resetNotif: any => void,
}

class MainScreen extends PureComponent<Props> {

    constructor(props) {
        super(props)
        this.state = {
            error: false,
            refreshingUser: false,
            refreshingAssign: false,
            refreshingNotif: false
        }
    }

    componentDidMount() {
        this.getUser()
        this.getAssign()
        this.getNotifications()
        this.postProcurement()
    }

    onRefresh = () => {
        this.setState({ refreshingUser: true, refreshingAssign: true, refreshingNotif: true })
        this.getUser()
        this.getNotifications()
        this.getAssign()
        this.postProcurement()
    }

    getUser = async () => {
        this.props.resetUser()
        Api.get()
            .user(this.props.token)
            .then(res => {
                if (res.status === 200) {
                    this.props.setUser(res.data.data)
                    this.setState({ refreshingUser: false })
                }
                else if (res.status != 200) {
                    NavigationServices.resetStackNavigate(["Auth"])
                }
            })
            .catch(error => {
                console.log("ERROR", error)
                NavigationServices.resetStackNavigate(["Auth"])
                this.setState({ error: true, refreshingUser: false })
            })
    }

    getNotifications = async () => {
        this.props.resetNotif()
        Api.get()
            .notif(this.props.token)
            .then(res => {
                this.props.setNotif(res.data.data)
                this.setState({ refreshingNotif: false })
            })
            .catch(error => {
                console.log("ERROR", error)
                this.setState({ error: true, refreshingNotif: false })
            })
    }

    getAssign = async () => {
        this.setState({ refreshingAssign: true })
        this.props.resetPick()
        Api.get()
            .item(this.props.token)
            .then(res => {
                this.setItems(res.data.data)
            })
            .catch(error => {
                console.log("ERROR", error)
                this.setState({ error: true, refreshingAssign: false })
            })
    }

    postProcurement = async () => {
        items = await AsyncStorage.FetchData("submit_procurement")

        AsyncStorage.RemoveData("submit_procurement")

        if (items != undefined || items != null) {
            items.map((data, index) => {
                console.log("File Submit proc : ", data.file)
                Api.post()
                    .proc(this.props.token, data.vendor, data.total_amount, data.payment, data.file, data.remarks, data.items)
                    .then(res => {
                        if (res.status === 200) {
                            ToastAndroid.show(res.data.status, ToastAndroid.SHORT)
                        } else if (res.status !== 200) {
                            Utils.submitProcurement(data.vendor, data.total_amount, data.payment, data.file, data.remarks, data.items)
                        }
                        console.log("RES", res.data)
                    })
                    .catch(error => {
                        console.log("ERROR", error)
                        this.setState({ error: true })
                    })
            })
        }
    }

    setItems = (data) => {
        var res = []
        if (data != null) {
            data.forEach(data => {
                var items = { name: data.name, qty: parseInt(data.qty), uom: data.uom, uom_id: data.uom_id, skuid: data.skuid, check: false }
                res = res.concat(items)
            })
            this.props.setPick(res)
        }
        this.setState({ refreshingAssign: false })
    }

    pressTopUp = () => {
        NavigationServices.navigate("TopUp")
    }

    renderTopUp = () => (
        <View style={styles.containerTopUp}>
            <Card style={{ padding: 16 }}>
                <View style={styles.containerCardTopUp}>
                    <View>
                        <Text style={{ color: Color.grey }}>Saldo anda saat ini</Text>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{Utils.convertToRupiah(this.props.saldo != 0 ? this.props.saldo : 0)}</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.pressTopUp()}>
                        <View style={styles.containerBtnTopUp}>
                            <Image source={Images.icon.iconWallet} style={styles.containerBtn} />
                            <Text style={styles.txtBtn}>TOP UP</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Card>
        </View>
    )

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={styles.containerScroll} refreshControl={
                    <RefreshControl refreshing={this.state.refreshingUser && this.state.refreshingNotif && this.state.refreshingAssign} onRefresh={this.onRefresh.bind(this)} />
                }>
                    <View style={styles.containerHeader}>
                        <Image source={Images.logo.iconLogo} style={styles.imgHeader} />
                        <View>
                            <Text style={styles.txtHeaderWelcome}>Welcome</Text>
                            <Text style={styles.txtheaderName}>{this.props.name != undefined ? this.props.name : "Nama Lengkap"}</Text>
                        </View>
                    </View>
                    {this.renderTopUp()}
                    <ListAssign isFetching={this.state.refreshingAssign} />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state),
    name: UserRedux.selectors.name(state),
    email: UserRedux.selectors.email(state),
    saldo: UserRedux.selectors.saldo(state),
    items: PickRedux.selectors.item(state),
})

const mapDispatchToProps = dispatch => ({
    setUser: data => dispatch(UserRedux.actions.setData({ data })),
    setPick: data => dispatch(PickRedux.actions.setData(data)),
    setNotif: data => dispatch(NotifRedux.actions.setData(data)),
    resetUser: () => dispatch(UserRedux.actions.resetUser()),
    resetPick: () => dispatch(PickRedux.actions.resetPick()),
    resetNotif: () => dispatch(NotifRedux.actions.resetNotif()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)