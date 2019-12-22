import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { View, Text, StyleSheet, ScrollView, ToastAndroid } from "react-native"
import { Container, Button, Loading, TextInput } from "@app/components"
import Color from "@app/assets/colors"
import { Api } from "@app/api"

import UserRedux from "@app/redux/user"
import { NavigationServices } from "@app/services"

const styles = StyleSheet.create({
    container: { flex: 1, color: Color.backgroudDefault },
    containerItem: { backgroundColor: Color.transparent, marginBottom: 12 },
    containerItemName: { flexDirection: "row", alignItems: "center", flex: 1, marginBottom: 6 },
    txtItemName: { fontSize: 16, fontWeight: "bold", marginRight: 12 },
    input: { backgroundColor: Color.white, fontSize: 12, width: "100%", marginBottom: 24 },
    containerBtnButtom: { flexDirection: "row", alignItems: "center", marginTop: 24, alignSelf: "flex-end", alignContent: "center" },
    btnCancel: { backgroundColor: Color.grey, marginRight: 12 }
})

type Props = {
    token: string,
}

class PickScreen extends PureComponent<Props> {

    constructor(props) {
        super(props)
        this.state = {
            colorBtn: Color.dividerColor,
            qtyItemPick: 0,
            isSubmit: false,
            items: [],
            refreshing: false
        }
    }

    componentDidMount() {
        console.log("Props Data : ", JSON.parse(this.props.navigation.getParam('data')))
        this.setItems(JSON.parse(this.props.navigation.getParam('data')))
    }

    setItems = (data) => {
        var res = []
        data.forEach(data => {
            var items = { id: data.id, name: data.name, qty: data.qty, uom: data.uom, skuid: data.skuid, uom_id: data.uom_id, pick: 0 }
            res = res.concat(items)
            this.setState({ items: res })
        })
    }

    postAssign = async () => {
        let items = []
        let minor = false

        this.state.items.forEach(data => {
            if (data.pick == 0) {
                this.setState({ isSubmit: false })
                ToastAndroid.show("Quantity tidak boleh kosong", ToastAndroid.SHORT)
                minor = true
            } else if (data.pick > data.qty) {
                this.setState({ isSubmit: false })
                ToastAndroid.show("Quantity melebihi yang dibutuhkan", ToastAndroid.SHORT)
                minor = true
            } else {
                items = items.concat(data)
            }
        })

        if (!minor) {
            Api.post()
                .assign(this.props.token, items)
                .then(res => {
                    console.log("Pick Screen : ", res)
                    this.setState({ isSubmit: false })
                    if (res.data.status == "success") {
                        NavigationServices.resetStackNavigate(["Main"])
                        ToastAndroid.show("Berhasil", ToastAndroid.SHORT)
                    } else {
                        ToastAndroid.show("Gagal", ToastAndroid.SHORT)
                    }
                    console.log("RES : ", res)
                })
                .catch(error => {
                    console.log("ERROR", error)
                    this.setState({ error: true, isSubmit: false })
                    ToastAndroid.show("Error", ToastAndroid.SHORT)
                })
        }

    }

    pressCancel = () => {
        NavigationServices.goBack()
    }

    pressSubmit = () => {
        this.setState({ isSubmit: true })
        this.postAssign()
    }

    renderItems = (items) => {
        return (
            items.map((data, index) => (
                <View style={styles.containerItem} key={index}>
                    <View style={styles.containerItemName}>
                        <Text style={styles.txtItemName}>{data.name}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text>{data.qty}</Text>
                            <Text> {data.uom}</Text>
                        </View>
                    </View>
                    <TextInput
                        label="Quantity"
                        keyboardType={"numeric"}
                        value={data.pick}
                        style={styles.input}
                        onChangeText={text => {
                            let itemCopy = JSON.parse(JSON.stringify(this.state.items))
                            itemCopy[index].pick = text
                            this.setState({ items: itemCopy })
                        }}
                    />
                </View>
            ))
        )
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Container>
                    {this.renderItems(this.state.items)}

                    {this.state.isSubmit && <Loading />}

                    <View style={styles.containerBtnButtom}>
                        <Button mode="contained" style={styles.btnCancel} onPress={() => this.pressCancel()}>CANCEL</Button>
                        <Button mode="contained" onPress={() => this.pressSubmit()} disabled={this.state.isSubmit}>SUBMIT</Button>
                    </View>
                </Container>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state),
})

export default connect(mapStateToProps, null)(PickScreen)