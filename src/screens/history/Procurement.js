import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { View, Text, StyleSheet, ScrollView, SafeAreaView, RefreshControl } from "react-native"
import Color from "@app/assets/colors"
import { Card, Container, Loading } from "@app/components"
import { EmptyData } from "@app/containers"
import { Api } from "@app/api"
import { NavigationServices } from "@app/services"

import UserRedux from "@app/redux/user"
import HistoryRedux from "@app/redux/history"

const styles = StyleSheet.create({
    containerScroll: { flex: 1, backgroundColor: Color.backgroudDefault },
    cardContainer: { padding: 24, marginVertical: 12 },
    containerItem: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
    txtTitle: { color: Color.grey, fontSize: 12 },
    txtNoProc: { fontSize: 18, fontWeight: "bold" },
    txtStatus: { fontSize: 14, fontWeight: "bold", paddingTop: 4 },
})

type Props = {
    token: string,
    history: any[],
    setHistory: any => void,
    setCheck: any => void,
    resetHistory: any => void,
}

class Procurement extends PureComponent<Props> {

    constructor(props) {
        super(props)
        this.state = {
            isFetchingProcurement: true
        }
    }

    componentDidMount() {
        this.getProcurement()
    }

    onRefresh = () => {
        setTimeout(() => {
            this.getProcurement()
        }, 3000)
    }

    getProcurement = async () => {
        this.props.resetHistory()
        this.props.setCheck(0)
        Api.get()
            .procurement(this.props.token)
            .then(res => {
                console.log("Res Procurement : ", res)
                this.props.setHistory(res.data.data)
                this.setState({ isFetchingProcurement: false })
            })
            .catch(error => {
                console.log("ERROR", error)
                this.setState({ error: true, isFetchingProcurement: true })
            })
    }

    pressCard = ({ data }) => {
        NavigationServices.navigate("DetailHistory", { title: "Detail History", data: JSON.stringify(data) })
    }

    renderStatus = (data) => {
        if (data == 1) {
            return (<Text style={[styles.txtStatus, { color: Color.grey }]}>Submit</Text>)
        } else if (data == 2) {
            return (<Text style={[styles.txtStatus, { color: Color.info }]}>Received</Text>)
        } else if (data == 3) {
            return (<Text style={[styles.txtStatus, { color: Color.danger }]}>Reject</Text>)
        } else if (data == 4) {
            return (<Text style={[styles.txtStatus, { color: Color.success }]}>Replenish</Text>)
        } else if (data == 5) {
            return (<Text style={[styles.txtStatus, { color: Color.warning }]}>Return Replenish</Text>)
        } else if (data == 6) {
            return (<Text style={[styles.txtStatus, { color: Color.divider }]}>Action Return Item</Text>)
        } else if (data == 7) {
            return (<Text style={[styles.txtStatus, { color: Color.divider }]}>Action Return Fund</Text>)
        } else {
            return (<Text style={[styles.txtStatus, { color: Color.black }]}>Status Not Found</Text>)
        }
    }

    renderCard = () => {
        if (this.state.isFetchingProcurement) {
            return (<Loading />)
        } else if (this.props.history == null || this.props.history.length == 0) {
            return (<EmptyData />)
        } else {
            return (
                this.props.history.map((data, index) => (
                    <Card
                        key={index}
                        style={styles.cardContainer}
                        onPress={() => this.pressCard({ data })}>
                        <View style={styles.containerItem}>
                            <View>
                                <Text style={styles.txtTitle}>No Procurement Order :</Text>
                                <Text style={styles.txtNoProc}>{data.no_proc}</Text>
                            </View>
                            <View style={{ alignItems: "flex-end" }}>
                                <Text style={styles.txtTitle}>Status</Text>
                                {this.renderStatus(data.status)}
                            </View>
                        </View>
                    </Card>
                ))
            )
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={styles.containerScroll} refreshControl={
                    <RefreshControl refreshing={this.state.isFetchingProcurement} onRefresh={this.onRefresh.bind(this)} />
                }>
                    <Container style={{ paddingVertical: 12, flex: 1 }}>
                        {this.renderCard()}
                    </Container>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state),
    history: HistoryRedux.selectors.item(state)
})

const mapDispatchToProps = dispatch => ({
    setHistory: data => dispatch(HistoryRedux.actions.setData(data)),
    setCheck: data => dispatch(HistoryRedux.actions.setCheck(data)),
    resetHistory: () => dispatch(HistoryRedux.actions.resetHistory()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Procurement)