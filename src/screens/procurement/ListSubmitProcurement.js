import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { View, StyleSheet, Text, Picker } from "react-native"
import { TextInput, Container } from "@app/components"
import { TextInputMask } from "react-native-masked-text"
import Utils from "@app/utils"
import Color from "@app/assets/colors"
import { Api } from "@app/api"

import AssignRedux from "@app/redux/assign"
import ProcRedux from "@app/redux/proc"
import UserRedux from "@app/redux/user"
import { AsyncStorage } from "@app/services"

const styles = StyleSheet.create({
    containerItems: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
    containerInputItems: { flexDirection: "row", justifyContent: "space-between", flex: 1 },
    txtHeaderName: { fontSize: 16, fontWeight: "bold", marginBottom: 4 },
    containerRow: { width: "45%" },
    input: { backgroundColor: Color.white, fontSize: 12, width: "100%" },
    dropdown: { fontSize: 11, color: Color.primaryColor, marginTop: 8 }
})

type Props = {
    token: string,
    items: any,
    setItems: any => void,
    resetItems: any => void,
    itemsAssign: any,
}

class ListSubmitProcurement extends PureComponent<Props> {

    constructor(props) {
        super(props)
        this.state = {
            uom: [],
            error: false,
        }
    }

    componentDidMount() {
        this.getUom()
        this.setItems(this.props.itemsAssign)
    }

    getUom = async () => {
        res = await AsyncStorage.FetchData("uom")
        this.setState({ uom: res })
    }

    setItems = (data) => {
        this.props.resetItems()
        var res = []
        data.forEach(data => {
            if (data.check) {
                var items = { skuid: data.skuid, name: data.name, qty_assign: data.qty, uom: data.uom, qty: 0, uom_id: 0, amount: 0 }
                res = res.concat(items)
                this.props.setItems(res)
            }
        })
    }

    renderList = (data) => (
        data.map((data, index) => (
            <View style={{ paddingVertical: 24 }} key={index}>
                <View>
                    <Text style={styles.txtHeaderName}>{data.name}  </Text>
                    <View style={styles.containerItems}>
                        <Text>{data.qty_assign}</Text>
                        <Text> {data.uom}</Text>
                    </View>
                </View>
                <View style={styles.containerInputItems}>
                    <View style={styles.containerRow}>
                        <TextInput
                            label="Quantity"
                            keyboardType={"numeric"}
                            value={data.qty}
                            style={styles.input}
                            onChangeText={text => {
                                let itemCopy = JSON.parse(JSON.stringify(this.props.items))
                                itemCopy[index].qty = text
                                this.props.setItems(itemCopy)
                            }}
                        />
                        <TextInputMask
                            refInput={(ref) => this.myAmount = ref}
                            customTextInput={TextInput}
                            customTextInputProps={{
                                style: styles.input,
                                label: "Amount"
                            }}
                            type={"money"}
                            options={{
                                precision: 0,
                                unit: "Rp "
                            }}
                            onChangeText={text => {
                                let itemCopy = JSON.parse(JSON.stringify(this.props.items))
                                itemCopy[index].amount = Utils.convertToAngka(text)
                                this.props.setItems(itemCopy)
                            }}
                            value={data.amount}
                        />
                    </View>
                    <View style={styles.containerRow}>
                        <Text style={styles.dropdown}>UOM</Text>
                        {
                            this.state.uom.length != 0 &&
                            <Picker
                                itemStyle={{ marginHorizontal: 24 }}
                                selectedValue={data.uom_id}
                                onValueChange={(itemValue, itemIndex) => {
                                    let itemCopy = JSON.parse(JSON.stringify(this.props.items))
                                    itemCopy[index].uom_id = itemValue
                                    this.props.setItems(itemCopy)
                                }}>
                                <Picker.Item label="Pilih UOM" value={0} color={Color.dividerColor} />
                                {
                                    this.state.uom.map((data, index) => (
                                        <Picker.Item label={data.description} value={data.id} key={index} />
                                    ))
                                }
                            </Picker>
                        }
                    </View>
                </View>
            </View>
        ))
    )

    render() {
        return (
            <Container style={{ flex: 1, backgroundColor: Color.white, paddingVertical: 0 }}>
                {this.props.items.length != 0 && this.renderList(this.props.items)}
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state),
    items: ProcRedux.selectors.item(state),
    itemsAssign: AssignRedux.selectors.item(state),
})

const mapDispatchToProps = dispatch => ({
    setItems: data => dispatch(ProcRedux.actions.setData(data)),
    resetItems: () => dispatch(ProcRedux.actions.resetProc())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListSubmitProcurement)