import React, { Component } from "react"
import { connect } from "react-redux"
import { View, StyleSheet, ScrollView, ToastAndroid } from "react-native"
import Color from "@app/assets/colors"
import { TextInput, Container, Button, Loading } from "@app/components"
import { TextInputMask } from "react-native-masked-text"
import Utils from "@app/utils"
import { NavigationServices } from "@app/services"
import { Api } from "@app/api"

import UserRedux from "@app/redux/user"

const styles = StyleSheet.create({
    input: { backgroundColor: Color.transparent, fontSize: 12, marginBottom: 24 },
    containerBtnButtom: { flexDirection: "row", alignItems: "center", marginTop: 24, alignSelf: "flex-end" },
    btnCancel: { backgroundColor: Color.grey, marginRight: 12 }
})

type Props = {
    token: string,
}

class TopUpScreen extends Component<Props> {

    constructor(props) {
        super(props)
        this.state = {
            topup: 0,
            remarks: "",
            isFetching: false
        }
    }

    componentDidMount() {

    }

    pressCancel = () => {
        NavigationServices.goBack()
    }

    pressSubmit = () => {
        this.setState({ isFetching: true })
        Api.post()
            .topup(this.props.token, this.state.topup, this.state.remarks)
            .then(res => {
                this.setState({ isFetching: false })
                console.log("Respon TopUp : ", res)
                if (res.data.status == "success") {
                    ToastAndroid.show("Berhasil", ToastAndroid.SHORT)
                    NavigationServices.resetStackNavigate(["Main"])
                } else {
                    ToastAndroid.show("Gagal", ToastAndroid.SHORT)
                }
            })
            .catch(error => {
                console.log("ERROR", error)
                this.setState({ error: true, isFetching: false })
            })
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: Color.backgroudDefault }}>
                <Container>
                    <TextInputMask
                        refInput={(ref) => this.myAmount = ref}
                        customTextInput={TextInput}
                        customTextInputProps={{
                            style: styles.input,
                            label: "Jumlah Top Up"
                        }}
                        type={"money"}
                        options={{
                            precision: 0,
                            unit: "Rp "
                        }}
                        onChangeText={text => this.setState({ topup: Utils.convertToAngka(text) })}
                        value={this.state.topup}
                    />
                    <TextInput
                        label='Remarks'
                        value={this.state.remarks}
                        style={styles.input}
                        multiline={true}
                        numberOfLines={2}
                        maxHeight={80}
                        onChangeText={text => this.setState({ remarks: text })}
                    />
                    {
                        this.state.isFetching && <Loading />
                    }
                    <View style={styles.containerBtnButtom}>
                        <Button mode="contained" style={styles.btnCancel} onPress={() => this.pressCancel()}>CANCEL</Button>
                        <Button mode="contained" onPress={() => this.pressSubmit()} disabled={this.state.isFetching}>SUBMIT</Button>
                    </View>
                </Container>
            </ScrollView>

        )
    }
}

const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state)
})

export default connect(mapStateToProps, null)(TopUpScreen)