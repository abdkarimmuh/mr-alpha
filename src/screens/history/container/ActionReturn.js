import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { View, Text, StyleSheet, Picker } from "react-native"
import { Container, Loading, Button } from "@app/components"
import Color from "@app/assets/colors"
import { Api } from "@app/api"

import UserRedux from "@app/redux/user"
import { NavigationServices } from "@app/services"
import { Metrics } from "@app/themes"

const WIDTH_PICKER = Metrics.DEVICE_WIDTH - 48 - 100 - 12

const styles = StyleSheet.create({
    containerStyle: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
    btnStyle: { width: 100 },
    dropdown: { fontSize: 12, color: Color.primaryColor, marginBottom: 4, marginTop: 8 },
})

type Props = {
    token: string,
}

class ActionReturn extends PureComponent<Props> {

    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            loading: false,
            action: 0,
            actionItems: [
                { id: 1, name: "Kirim Ulang Barang" },
                { id: 2, name: "Uang Kembali" },
            ],
            error: false
        }
    }

    componentDidMount() {
        this.setState({ id: this.props.id })
    }

    changeColorSubmit = () => {
        if (this.state.loading) {
            return Color.dividerColor
        } else {
            return Color.primaryColor
        }
    }

    pressSubmit = () => {
        this.setState({ loading: true })
        this.postReject()
    }

    postReject = async () => {
        Api.post()
            .reject(this.props.token, this.state.action, this.state.id)
            .then(res => {
                console.log('res', res)
                if (res.data.status === "success") {
                    this.setState({ loading: false })
                    NavigationServices.resetStackNavigate(["Main"])
                }
            })
            .catch(error => {
                console.log("ERROR", error)
                this.setState({ error: true, loading: true })
            })
    }

    render() {
        return (
            <Container>
                <Text style={styles.dropdown}>Pembayaran</Text>
                {this.state.loading &&
                    <View style={{ paddingVertical: 24 }}>
                        <Loading />
                    </View>
                }
                <View style={styles.containerStyle}>
                    <View style={{ width: WIDTH_PICKER }}>
                        <Picker
                            selectedValue={this.state.action}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ action: itemValue })
                            }>
                            <Picker.Item label="Pilih Opsi" value={0} color={Color.dividerColor} />
                            {
                                this.state.actionItems.map((data, index) => (
                                    <Picker.Item label={data.name} value={data.id} key={index} />
                                ))
                            }
                        </Picker>
                    </View>
                    <Button mode="contained"
                        disabled={this.state.loading}
                        style={[styles.btnStyle, { backgroundColor: this.changeColorSubmit() }]}
                        onPress={() => this.pressSubmit()}>SUBMIT</Button>
                </View>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state),
})

export default connect(mapStateToProps, null)(ActionReturn)