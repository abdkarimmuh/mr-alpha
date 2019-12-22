import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { Image, View, StyleSheet, ToastAndroid } from "react-native"
import { ButtonLoginRegister, Container, Text, TextInput, Loading } from "@app/components"
import { theme } from "@app/themes"
import Images from "@app/assets/images"
import Color from "@app/assets/colors"
import Styles from "@app/assets/styles"
import Api from "@app/api/Api"
import { NavigationServices, AsyncStorage } from "@app/services"

import UserRedux from "@app/redux/user"

const styles = StyleSheet.create({
    view: { flex: 1, justifyContent: "center", backgroundColor: Color.backgroudDefault },
    container: { flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", paddingVertical: 24, paddingHorizontal: 32 },
    image: { width: 200, height: 100, resizeMode: "contain", alignSelf: "center" },
    title: { alignSelf: "center", paddingTop: 28, fontSize: 48, color: Color.primaryColor, fontWeight: "bold" },
    caption: { position: "absolute", bottom: 0, alignSelf: "center", marginBottom: 24, flexDirection: "row" }
})

type Props = {
    setData: any => void,
    setToken: any => void,
}

class LoginScreen extends PureComponent<Props> {
    constructor(props) {
        super(props)
        this.state = {
            isFetching: false,
            email: "procurement@example.com",
            password: "1234",
            error: false
        }
    }

    getUser = async (token) => {
        Api.get()
            .user(token)
            .then(res => {
                this.props.setData(res.data.data)
                this.setState({ isFetching: false })
                NavigationServices.resetStackNavigate(["Main"])
            })
            .catch(error => {
                console.log("ERROR", error)
            })
    }

    getUom = async (token) => {
        Api.get()
            .uom(token)
            .then((res) => {
                AsyncStorage.StoreData("uom", res.data.data)
            })
            .catch(error => {
                console.log("ERROR", error)
            })
    }

    onPressLogin = async () => {
        this.setState({ isFetching: true })
        const { email, password } = this.state
        Api.post()
            .login(email, password)
            .then(res => {
                console.log("Res login : ", res)
                if (res.status === 200) {
                    AsyncStorage.StoreData("access_token", res.data.access_token)
                    this.getUser(res.data.access_token)
                    this.getUom(res.data.access_token)
                    this.props.setToken(res.data.access_token)
                } else {
                    this.setState({ isFetching: false })
                    ToastAndroid.show("Tidak dapat terhubung", ToastAndroid.SHORT)
                }
            })
            .catch(error => {
                console.log("ERROR", error)
                this.setState({ error: true })
            })
    }

    renderInput = () => {
        return (
            <View>
                <TextInput label="Email" mode="outlined" theme={theme} value={this.state.email} style={Styles.textInput}
                    onChangeText={email => { this.setState({ email }) }}
                />
                <TextInput label="Password" mode="outlined" theme={theme} secureTextEntry value={this.state.password} style={Styles.textInput}
                    onChangeText={password => { this.setState({ password }) }}
                />
            </View>
        )
    }

    render() {
        if (this.state.isFetching) {
            return (
                <Container style={{ flex: 1, backgroundColor: Color.transparent }} >
                    <Loading />
                </Container>
            )
        } else {
            return (
                <View style={styles.view}>
                    <Container style={styles.container}>
                        <Image source={Images.logo.iconHeader} style={styles.image} />
                        {this.renderInput()}
                        {ButtonLoginRegister("LOGIN", this.onPressLogin)}
                    </Container>
                    <View style={styles.caption}>
                        <Text style={{ fontWeight: "bold" }}>FreshBox</Text>
                        <Text> for Purchasing</Text>
                    </View>
                </View>
            )
        }
    }
}

const mapDispatchToProps = dispatch => ({
    setData: data => dispatch(UserRedux.actions.setData({ data })),
    setToken: token => dispatch(UserRedux.actions.setToken(token))
})

export default connect(null, mapDispatchToProps)(LoginScreen)