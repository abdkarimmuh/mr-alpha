import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { View, Text, StyleSheet, ScrollView, SafeAreaView, RefreshControl, ToastAndroid, TouchableOpacity } from "react-native"

import Color from "@app/assets/colors"
import { Container, Loading, Checkbox } from "@app/components"
import { EmptyData } from "@app/containers"
import { Api } from "@app/api"

import UserRedux from "@app/redux/user"
import AssignRedux from "@app/redux/assign"
import { NavigationServices } from "@app/services"

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Color.backgroudDefault },
    containerItem: { paddingHorizontal: 24, paddingVertical: 12, flex: 1 },
    txtItemName: { fontSize: 16, fontWeight: "bold", marginBottom: 4, width: "100%" },
    containerBtnBottom: { position: "absolute", bottom: 28, alignSelf: "center" },
    containerBtn: { paddingHorizontal: 24, paddingVertical: 8, borderRadius: 2, opacity: 4, backgroundColor: Color.accentColor, alignItems: "center", justifyContent: "center" }
})

type Props = {
    items: any,
    setItems: any => void,
    resetItems: any => void
}

class ProcurementScreen extends PureComponent<Props> {

    constructor(props) {
        super(props)
        this.state = {
            refreshing: false,
            qtyItemCheck: 0,
        }
    }

    componentDidMount() {
        this.getProcurement()
    }

    onRefresh = () => {
        this.getProcurement()
    }

    getProcurement = async () => {
        this.setState({ refreshing: true })
        this.props.resetItems()
        Api.get()
            .assign(this.props.token)
            .then(res => {
                if (res.status == 200) {
                    this.setItems(res.data.data)
                } else {
                    this.props.resetItems()
                }
                this.setState({ refreshing: false })
            })
            .catch(error => {
                console.log("ERROR", error)
                this.setState({ error: true, refreshing: false })
                ToastAndroid.show("Error", ToastAndroid.SHORT)
            })
    }

    setItems = (data) => {
        var res = []
        if (data != null) {
            data.forEach(data => {
                var items = { skuid: data.skuid, name: data.name, qty: data.qty, uom: data.uom, check: false }
                res = res.concat(items)
                this.props.setItems(res)
            })
        }
    }

    checkItems = ({ data, index }) => {
        let itemCopy = JSON.parse(JSON.stringify(this.props.items))
        itemCopy[index].check = !data.check
        this.props.setItems(itemCopy)

        let qty = this.state.qtyItemCheck
        if (data.check) {
            this.setState({
                qtyItemCheck: qty + 1
            })
        } else {
            this.setState({
                qtyItemCheck: qty - 1
            })
        }
    }

    pressPick = () => {
        NavigationServices.navigate("SubmitProcurement")
    }

    renderButton = () => (
        <View style={styles.containerBtnBottom}>
            <TouchableOpacity onPress={() => this.pressPick()}>
                <View style={styles.containerBtn}>
                    <Text style={{ color: Color.white }}>BUY</Text>
                </View>
            </TouchableOpacity>
        </View>
    )

    renderItems = (items) => {
        if (this.state.refreshing) {
            return (
                <Container>
                    <Loading />
                </Container>
            )
        } else if (this.props.items === null || this.props.items.length === 0) {
            return (
                <Container>
                    <EmptyData />
                </Container>
            )
        } else {
            return (
                items.map((data, index) => (
                    <TouchableOpacity onPress={() => this.checkItems({ data, index })} key={index}>
                        <View style={[styles.containerItem, { backgroundColor: data.check ? Color.white : Color.transparent }]}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Checkbox
                                    status={data.check ? "checked" : "unchecked"}
                                // onPress={() => this.checkItems({ data, index })}
                                />
                                <View style={{ paddingLeft: 8, flex: 1 }}>
                                    <Text style={styles.txtItemName}>{data.name}</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text>{data.qty}</Text>
                                        <Text> {data.uom}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))
            )
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={styles.container} refreshControl={
                    <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh.bind(this)} />
                }>
                    {this.renderItems(this.props.items)}
                    <View style={{ width: "100%", height: 48 }} />
                </ScrollView>
                {this.state.qtyItemCheck != 0 && this.renderButton()}
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => ({
    items: AssignRedux.selectors.item(state),
    token: UserRedux.selectors.token(state)
})

const mapDispatchToProps = dispatch => ({
    setItems: data => dispatch(AssignRedux.actions.setData(data)),
    resetItems: () => dispatch(AssignRedux.actions.resetAssign())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProcurementScreen)