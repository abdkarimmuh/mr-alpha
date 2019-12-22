import React, { Component } from "react"
import { Text } from "react-native"

export default class HeaderDetail extends Component {
    render() {
        return (
            <Text style={{ color: "#FFF", marginLeft: 12, fontWeight: "bold", fontSize: 16 }} >{this.props.children}</Text>
        )
    }
}
