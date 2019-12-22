import React, { Component } from "react"
import { Text, View } from "react-native"

export default class HeaderDefault extends Component {
    render() {
        return (
            <View style={{ flexDirection: "row", marginLeft: 12 }}>
                <Text style={{ fontWeight: "bold", color: "#FFF", fontSize: 16 }}>FreshBox</Text>
                <Text style={{ color: "#FFF", fontSize: 16 }}> for Purchasing</Text>
            </View>
        )
    }
}
