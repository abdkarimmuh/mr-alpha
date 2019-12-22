import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import Color from "@app/assets/colors"
import { Container, Loading } from "@app/components"
import Utils from "@app/utils"
import { Metrics } from "@app/themes"
import { Api } from "@app/api"
import { ActionReturn } from "@app/screens"

import UserRedux from "@app/redux/user"
import { DetailHistoryScreen } from "../history"

const WIDTHBARANG = Metrics.DEVICE_WIDTH - 200

const styles = StyleSheet.create({
    containerScroll: { flex: 1, backgroundColor: Color.backgroudDefault },
    txtDetailTitle: { color: Color.grey, fontSize: 12 },
    txtDetail: { fontWeight: "bold", fontSize: 16 },
    txtNoProc: { fontWeight: "bold", fontSize: 18, alignSelf: "center" },
    txtStatus: { fontWeight: "300", fontSize: 10, alignSelf: "center", marginTop: 4, borderRadius: 2, paddingVertical: 4, paddingHorizontal: 10, color: Color.white },
    txtMessageRemarks: { marginTop: 16 },
    containerItems: { backgroundColor: Color.white, opacity: 4, flex: 1 },
    txtItemTitle: { fontSize: 16, fontWeight: "bold", alignSelf: "center", marginBottom: 12 },
    containerRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 12 },
    containerQty: { flexDirection: "row" },
    containerMenu: { flexDirection: "row", justifyContent: "space-between" },
    viewHeader: { color: Color.grey, fontSize: 12 },
    viewQty: { width: 50, textAlign: "center" },
    viewAmount: { width: 100, textAlign: "right" },
    containerRowStatus: { flexDirection: "row", marginTop: 12 },
    viewStatusName: { width: 220 },
    viewStatusQty: { width: 80, textAlign: "center" },
    viewStatusAmount: { width: 100, textAlign: "center" },
    viewStatus: { width: 70, textAlign: "right" },
    divider: { backgroundColor: Color.grey, width: "100%", height: 1, marginTop: 8, marginBottom: 12 },
})

type Props = {
    token: string
}

class DetailNotificationsScreen extends PureComponent<Props> {

    constructor(props) {
        super(props)
        this.state = {
            data: {},
            status: 0,
            isLoading: true,
            error: false
        }
    }

    componentDidMount() {
        this.getDetailNotif()
    }

    getDetailNotif = async () => {
        let status = parseInt(this.props.navigation.getParam("status"))
        this.setState({ status: status })
        Api.get()
            .detailNotif(this.props.token, parseInt(this.props.navigation.getParam("id")), status)
            .then((res) => {
                console.log("Ini datanya : ", res)
                this.setState({ data: res.data.data, isLoading: false, error: false })
            })
            .catch(error => {
                console.log("ERROR", error)
                this.setState({ error: true, isLoading: false })
            })
    }

    getValueStatus = (data) => {
        if (data == 2) {
            return "Received"
        } else if (data == 3) {
            return "Reject"
        }
    }

    getColorStatus = (data) => {
        if (data == 2) {
            return {}
        } else if (data == 3) {
            return { color: Color.danger }
        }
    }

    renderStatus = (data) => {
        if (data == 1) {
            return (<Text style={[styles.txtStatus, { backgroundColor: Color.black4A }]}>Submit</Text>)
        } else if (data == 2) {
            return (<Text style={[styles.txtStatus, { backgroundColor: Color.info }]}>Received</Text>)
        } else if (data == 3) {
            return (<Text style={[styles.txtStatus, { backgroundColor: Color.danger }]}>Reject</Text>)
        } else if (data == 4) {
            return (<Text style={[styles.txtStatus, { backgroundColor: Color.success }]}>Replenish</Text>)
        } else if (data == 5) {
            return (<Text style={[styles.txtStatus, { backgroundColor: Color.warning }]}>Return Replenish</Text>)
        } else if (data == 6) {
            return (<Text style={[styles.txtStatus, { backgroundColor: Color.grey }]}>Action Return Item</Text>)
        } else if (data == 7) {
            return (<Text style={[styles.txtStatus, { backgroundColor: Color.grey }]}>Action Return Fund</Text>)
        } else {
            return (<Text style={[styles.txtStatus, { backgroundColor: Color.grey }]}>Status Not Found</Text>)
        }
    }

    renderDetail = (data) => {
        if (data != null) {
            return (
                <Container style={{ paddingVertical: 12, marginBottom: 12 }}>
                    <View style={{ paddingVertical: 12 }}>
                        <Text style={styles.txtNoProc}>{data.no_proc}</Text>
                        {this.renderStatus(data.status)}
                    </View>
                    <View style={{ paddingVertical: 12 }}>
                        <Text style={styles.txtDetailTitle}>Vendor Name</Text>
                        <Text style={styles.txtDetail}>{data.vendor}</Text>
                    </View>
                    <View style={styles.containerMenu}>
                        <View style={{ paddingVertical: 12 }}>
                            <Text style={styles.txtDetailTitle}>Payment</Text>
                            <Text style={styles.txtDetail}>{data.payment}</Text>
                        </View>
                        <View style={{ paddingVertical: 12, alignItems: "flex-end" }}>
                            <Text style={styles.txtDetailTitle}>Total Amount</Text>
                            <Text style={styles.txtDetail}>{Utils.convertToRupiah(parseInt(data.total_amount))}</Text>
                        </View>
                    </View>
                </Container>
            )
        }
    }

    renderItems = (data, status) => {
        if (status == 1) {
            return (
                <Container style={styles.containerItems}>
                    <Text style={styles.txtItemTitle}>Detail Pembelian</Text>
                    <View style={[styles.containerRow, { marginBottom: 12 }]}>
                        <Text style={[styles.viewHeader, { width: WIDTHBARANG }]}>Nama Barang</Text>
                        <View style={styles.containerQty}>
                            <Text style={[styles.viewQty, styles.viewHeader]}>Qty</Text>
                            <Text style={[styles.viewAmount, styles.viewHeader]}>Amount</Text>
                        </View>
                    </View>
                    {data.map((data, index) => (
                        <View key={index}>
                            <View style={styles.containerRow}>
                                <Text style={{ fontWeight: "bold", fontSize: 14, width: WIDTHBARANG }}>{data.name}</Text>
                                <View style={styles.containerQty}>
                                    <Text style={[styles.viewQty, { fontWeight: "bold", fontSize: 14 }]}>{data.qty} {data.uom}</Text>
                                    <Text style={[styles.viewAmount, { fontWeight: "bold", fontSize: 14 }]}>{Utils.convertToRupiah(parseInt(data.amount))}</Text>
                                </View>
                            </View>
                            <View style={styles.divider} />
                        </View>
                    ))}
                </Container>
            )
        } else {
            return (
                <Container style={styles.containerItems}>
                    <Text style={styles.txtItemTitle}>Detail Pembelian</Text>
                    <ScrollView horizontal={true} style={{ flex: 1, alignSelf: "center" }} directionalLockEnabled={false}>
                        <View style={{ flex: 1 }}>
                            <View style={[styles.containerRowStatus, { marginBottom: 12 }]}>
                                <Text style={[styles.viewStatusName, { color: Color.grey }]}>Nama Barang</Text>
                                <Text style={[styles.viewStatusQty, { color: Color.grey }]}>Qty Submit</Text>
                                <Text style={[styles.viewStatusQty, { color: Color.grey }]}>Qty Minus</Text>
                                <Text style={[styles.viewStatusAmount, { color: Color.grey }]}>Amount</Text>
                                <Text style={[styles.viewStatus, { color: Color.grey }]}>Status</Text>
                            </View>
                            {data.map((data, index) => (
                                <View key={index}>
                                    <View style={styles.containerRowStatus}>
                                        <Text style={[styles.viewStatusName, { fontWeight: "bold", fontSize: 14 }, this.getColorStatus(data.status)]}>{data.name}</Text>
                                        <Text style={[styles.viewStatusQty, { fontWeight: "bold", fontSize: 14 }, this.getColorStatus(data.status)]}>{data.qty} {data.uom}</Text>
                                        <Text style={[styles.viewStatusQty, { fontWeight: "bold", fontSize: 14 }, this.getColorStatus(data.status)]}>{data.qty_minus} {data.uom}</Text>
                                        <Text style={[styles.viewStatusAmount, { fontWeight: "bold", fontSize: 14 }, this.getColorStatus(data.status)]}>{Utils.convertToRupiah(parseInt(data.amount))}</Text>
                                        <Text style={[styles.viewStatus, { fontWeight: "bold", fontSize: 14 }, this.getColorStatus(data.status)]}>{this.getValueStatus(data.status)}</Text>
                                    </View>
                                    <View style={styles.divider} />
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </Container>
            )
        }
    }

    renderRemarks = (data) => (
        <Container>
            <Text style={styles.txtDetailTitle}>Remarks</Text>
            <Text style={styles.txtDetail}>{data}</Text>
        </Container>
    )

    render() {
        if (this.state.isLoading || this.state.data == null) {
            return (
                <Container>
                    <Loading />
                </Container>
            )
        } else {
            if (this.state.status == 1) {
                return (
                    <ScrollView style={styles.containerScroll}>
                        {this.renderDetail(this.state.data)}
                        {this.state.data.items != null && this.renderItems(this.state.data.items, this.state.data.status)}
                        {this.state.data.remarks != null && this.renderRemarks(this.state.data.remarks)}
                        {this.state.data.status == 3 && <ActionReturn id={this.state.data.id} />}
                    </ScrollView>
                )
            } else if (this.state.status == 2) {
                return (
                    <ScrollView style={styles.containerScroll}>
                        {this.renderDetail(this.state.data)}
                        {this.state.data.remarks != null && this.renderRemarks(this.state.data.remarks)}
                    </ScrollView>
                )
            }
        }
    }
}

const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state),
})

export default connect(mapStateToProps, null)(DetailNotificationsScreen)