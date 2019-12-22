import React, { Component } from "react"
import { Text } from "react-native"
import { Card } from "@app/components"
import Color from "@app/assets/colors"

export default class EmptyData extends Component {

    render() {
        return (
            <Card style={{ padding: 24 }}>
                <Text style={{ color: Color.grey, fontSize: 18, fontWeight: "500", alignSelf: "center" }}>Maaf Data Kosong</Text>
            </Card>
        )
    }
}