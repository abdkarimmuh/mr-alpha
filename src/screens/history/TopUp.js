import React, { Component } from "react"
import { connect } from "react-redux"
import { View, Text, StyleSheet, ScrollView, SafeAreaView, RefreshControl } from "react-native"
import { Container, Loading, Caption } from "@app/components"
import { EmptyData } from "@app/containers"
import { Api } from "@app/api"
import Color from "@app/assets/colors"
import Utils from "@app/utils"

import UserRedux from "@app/redux/user"

const styles = StyleSheet.create({
    containerScroll: { flex: 1, backgroundColor: Color.backgroudDefault },
    cardContainer: { marginVertical: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
    row: { width: "70%" },
    rowAmount: { flexDirection: "row", alignItems: "center" },
    txtAmount: { fontSize: 20, fontWeight: "bold", marginRight: 12 },
    txtDate: { color: Color.grey, fontStyle: "italic" },
    containerBadge: { paddingHorizontal: 12, borderRadius: 12 },
    captionStyle: { color: Color.white, fontSize: 10 },
})

type Props = {
    token: string,
}

class TopUp extends Component<Props> {

    constructor(props) {
        super(props)
        this.state = {
            history: [],
            isFetchingTopUp: true
        }
    }

    componentDidMount() {
        this.getTopUp()
    }

    onRefresh = () => {
        setTimeout(() => {
            this.getTopUp()
        }, 3000)
    }

    getTopUp = async () => {
        this.setState({ isFetchingTopUp: true })
        Api.get()
            .topup(this.props.token)
            .then(res => {
                this.setState({ history: res.data.data, isFetchingTopUp: false })
            })
            .catch(error => {
                console.log("ERROR", error)
                this.setState({ error: true, isFetchingTopUp: true })
            })
    }

    statusItem = (status) => {
        if (status == 1) {
            return (
                <View style={[styles.containerBadge, { backgroundColor: Color.grey }]}>
                    <Caption style={styles.captionStyle}>Submit</Caption>
                </View>
            )
        } else if (status == 2) {
            return (
                <View style={[styles.containerBadge, { backgroundColor: Color.success }]}>
                    <Caption style={styles.captionStyle}>Approve</Caption>
                </View>
            )
        } else {
            return (
                <View style={[styles.containerBadge, { backgroundColor: Color.danger }]}>
                    <Caption style={styles.captionStyle}>Reject</Caption>
                </View>
            )
        }
    }

    renderItems = () => {
        if (this.state.isFetchingTopUp) {
            return (<Loading />)
        } else if (this.state.history == null || this.state.history.length == 0) {
            return (<EmptyData />)
        } else {
            return (
                this.state.history.map((data, index) => (
                    <View style={styles.cardContainer} key={index}>
                        <View style={styles.row}>
                            <View style={styles.rowAmount}>
                                <Text style={styles.txtAmount}>{Utils.convertToRupiah(data.amount)}</Text>
                                {this.statusItem(data.status)}
                            </View>
                            <Text numberOfLines={1}>{data.remark}</Text>
                        </View>
                        <Text style={styles.txtDate}>{data.date}</Text>
                    </View>
                ))
            )
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={styles.containerScroll} refreshControl={
                    <RefreshControl refreshing={this.state.isFetchingTopUp} onRefresh={this.onRefresh.bind(this)} />
                }>
                    <Container style={{ paddingVertical: 12 }}>
                        {this.renderItems()}
                    </Container>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state)
})

export default connect(mapStateToProps, null)(TopUp)