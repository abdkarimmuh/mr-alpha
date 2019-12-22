import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { View, StyleSheet, ScrollView, Text, ToastAndroid, Picker } from "react-native"
import { Container, TextInput, Button, ImagePicker, Loading } from "@app/components"
import { ListSubmitProcurement } from "@app/screens"
import Utils from "@app/utils"
import Color from "@app/assets/colors"
import { Api } from "@app/api"

import ProcRedux from "@app/redux/proc"
import UserRedux from "@app/redux/user"
import { NavigationServices } from "@app/services"

const styles = StyleSheet.create({
    dropdown: { fontSize: 12, color: Color.primaryColor, marginBottom: 4, marginTop: 8, marginLeft: 12 },
    containerItem: { paddingVertical: 12, backgroundColor: Color.white, opacity: 4 },
    containerBtnUpload: { flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 8, backgroundColor: Color.primaryColor, borderRadius: 2, opacity: 4 },
    input: { backgroundColor: Color.transparent, fontSize: 12, width: "100%", marginBottom: 24 },
    containerButtom: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
    totalAmount: { fontSize: 20, fontWeight: "bold" },
    containerBtnButtom: { flexDirection: "row", alignItems: "center" },
    btnCancel: { backgroundColor: Color.grey, marginRight: 12 },
    textImage: { fontSize: 10, color: Color.primaryTextColor, width: "100%", textAlign: "center", marginTop: 8 }
})

type Props = {
    items: any,
    token: string,
    setItems: any => void,
    resetItems: any => void
}

class SubmitProcurementScreen extends PureComponent<Props> {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            vendor: "",
            payment: 0,
            paymentItems: [
                { id: 1, name: "Transfer" },
                { id: 2, name: "Cash" },
            ],
            remarks: "",
            totalAmount: 0,
            file: undefined
        }
    }

    componentDidMount() {
    }

    pressCancel = () => {
        NavigationServices.goBack()
    }

    pressSubmit = () => {
        this.setState({ loading: true })
        let complete = true
        let payment = ""

        if (this.state.payment == 1) {
            payment = "Transfer"
        } else if (this.state.payment == 2) {
            payment = "Cash"
        }

        if (this.props.items == null || this.state.totalAmount == 0 || this.state.vendor == "" || payment == "" || this.state.file == undefined || this.state.file.data == undefined) {
            complete = false
        } else {
            this.props.items.forEach(element => {
                if (element.qty == 0 || element.qty == null || element.qty == "" || element.qty == undefined) {
                    complete = false
                }
                if (element.amount == 0 || element.amount == null || element.amount == "" || element.amount == undefined) {
                    complete = false
                }
                if (element.uom_id == 0 || element.uom_id == null || element.uom_id == "" || element.uom_id == undefined) {
                    complete = false
                }
            })

        }

        if (complete == true) {
            this.postProc(this.props.token, this.state.vendor, this.state.totalAmount, payment, this.state.file.data, this.state.remarks, this.props.items)
        } else {
            ToastAndroid.show("Isi data dengan benar", ToastAndroid.SHORT)
            this.setState({ loading: false })
        }

    }

    postProc = async (token, vendor, total_amount, payment, file, remarks, items) => {
        Api.post()
            .proc(token, vendor, total_amount, payment, file, remarks, items)
            .then(res => {
                this.setState({ loading: false })
                if (res.status == 200) {
                    if (res.data.status === "success") {
                        NavigationServices.resetStackNavigate(["Main"])
                    } else {
                        ToastAndroid.show(res.data.message, ToastAndroid.SHORT)
                    }
                }
                else if (res.status != 200) {
                    Utils.submitProcurement(vendor, total_amount, payment, file, remarks, items)
                    NavigationServices.resetStackNavigate(["Main"])
                }
                console.log("Res : ", res)
            })
            .catch(error => {
                console.log("ERROR", error)
                this.setState({ error: true })
            })
    }

    handleTotalAmount = (items) => {
        let totalAmount = 0
        items.forEach(data => {
            totalAmount = totalAmount + parseInt(data.amount)
        })
        this.setState({ totalAmount: totalAmount })
    }


    handleInput = field => value => {
        this.setState({ [field]: value })
        console.log("Image : ", this.state.file)
    }

    vendorAndPayment = () => (
        <>
            <TextInput
                label="Vendor"
                value={this.state.vendor}
                style={styles.input}
                onChangeText={text => {
                    this.setState({ vendor: text })
                }}
            />
            <Text style={styles.dropdown}>Pembayaran</Text>
            <Picker
                selectedValue={this.state.payment}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({ payment: itemValue })
                }>
                <Picker.Item label="Pilih Pembayaran" value={0} color={Color.dividerColor} />
                {
                    this.state.paymentItems.map((data, index) => (
                        <Picker.Item label={data.name} value={data.id} key={index} />
                    ))
                }
            </Picker>
        </>
    )

    changeColorSubmit = () => {
        if (this.state.loading) {
            return styles.btnCancel
        } else {
            return null
        }
    }

    render() {
        this.handleTotalAmount(this.props.items)
        return (
            <ScrollView style={{ backgroundColor: Color.backgroudDefault }}>
                <ListSubmitProcurement />
                <Container>
                    {this.vendorAndPayment()}
                </Container>
                <Container style={{ paddingVertical: 8 }}>
                    <ImagePicker
                        onChangeValue={this.handleInput("file")}
                        placeholder={"UPLOAD INVOICE"}
                    />
                    {(this.state.file != null || this.state.file != undefined)
                        &&
                        <Text style={styles.textImage}> {this.state.file.fileName} </Text>}
                </Container>
                <Container>
                    <TextInput
                        label='Remarks'
                        value={this.state.remarks}
                        style={styles.input}
                        multiline={true}
                        numberOfLines={2}
                        maxHeight={80}
                        onChangeText={text => this.setState({ remarks: text })}
                    />
                </Container>
                {this.state.loading &&
                    <Container>
                        <Loading />
                    </Container>
                }
                <Container style={styles.containerButtom}>
                    <View>
                        <Text>Total Amount</Text>
                        <Text style={styles.totalAmount}>{Utils.convertToRupiah(this.state.totalAmount)}</Text>
                    </View>
                    <View style={styles.containerBtnButtom}>
                        <Button mode="contained" style={styles.btnCancel} onPress={() => this.pressCancel()}>CANCEL</Button>
                        <Button mode="contained" disabled={this.state.loading} style={this.changeColorSubmit()} onPress={() => this.pressSubmit()}>SUBMIT</Button>
                    </View>
                </Container>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => ({
    items: ProcRedux.selectors.item(state),
    token: UserRedux.selectors.token(state),
})

export default connect(mapStateToProps, null)(SubmitProcurementScreen)