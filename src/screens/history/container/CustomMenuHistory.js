import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu'
import Icon from "react-native-vector-icons/FontAwesome"
import Color from "@app/assets/colors"

export default class CustomMenuHistory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            disabled1: false,
            disabled2: false,
            disabled3: false,
            disabled4: false,
            disabled5: false,
            disabled6: false,
        }
    }

    _menu = null

    setMenuRef = ref => {
        this._menu = ref
    }

    showMenu = () => {
        this._menu.show()
    }

    hideMenu = () => {
        this._menu.hide()
    }

    option1Click = () => {
        this.hideMenu()
        this.props.option1Click()
        this.setState({
            disabled1: true,
            disabled2: false,
            disabled3: false,
            disabled4: false,
            disabled5: false,
            disabled6: false,
        })
    }

    option2Click = () => {
        this.hideMenu()
        this.props.option2Click()
        this.setState({
            disabled1: false,
            disabled2: true,
            disabled3: false,
            disabled4: false,
            disabled5: false,
            disabled6: false,
        })
    }

    option3Click = () => {
        this.hideMenu()
        this.props.option3Click()
        this.setState({
            disabled1: false,
            disabled2: false,
            disabled3: true,
            disabled4: false,
            disabled5: false,
            disabled6: false,
        })
    }

    option4Click = () => {
        this.hideMenu()
        this.props.option4Click()
        this.setState({
            disabled1: false,
            disabled2: false,
            disabled3: false,
            disabled4: true,
            disabled5: false,
            disabled6: false,
        })
    }

    option5Click = () => {
        this.hideMenu()
        this.props.option5Click()
        this.setState({
            disabled1: false,
            disabled2: false,
            disabled3: false,
            disabled4: false,
            disabled5: true,
            disabled6: false,
        })
    }

    option6Click = () => {
        this.hideMenu()
        this.props.option6Click()
        this.setState({
            disabled1: false,
            disabled2: false,
            disabled3: false,
            disabled4: false,
            disabled5: false,
            disabled6: true,
        })
    }

    render() {
        return (
            <View style={{ marginLeft: 16 }}>
                <Menu
                    ref={this.setMenuRef}
                    button={
                        <TouchableOpacity onPress={this.showMenu}>
                            <View style={{ padding: 12 }}>
                                <Icon
                                    name="filter"
                                    color={Color.white}
                                    size={16}
                                />
                            </View>
                        </TouchableOpacity>
                    }>
                    <MenuItem onPress={this.option1Click} disabled={this.state.disabled1}>Semua</MenuItem>
                    <MenuItem onPress={this.option2Click} disabled={this.state.disabled2}>Submit</MenuItem>
                    <MenuItem onPress={this.option3Click} disabled={this.state.disabled3}>Received</MenuItem>
                    <MenuItem onPress={this.option4Click} disabled={this.state.disabled4}>Reject</MenuItem>
                    <MenuItem onPress={this.option5Click} disabled={this.state.disabled5}>Replenish</MenuItem>
                    <MenuItem onPress={this.option6Click} disabled={this.state.disabled6}>Return Replenish</MenuItem>
                    <MenuDivider />
                </Menu>
            </View>
        )
    }
}