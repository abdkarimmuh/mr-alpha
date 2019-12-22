import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu'
import Icon from "react-native-vector-icons/FontAwesome"
import Color from "@app/assets/colors"

export default class CustomMenu extends Component {

    _menu = null

    setMenuRef = ref => {
        this._menu = ref
    }

    showMenu = () => {
        console.log("Show Menu")
        this._menu.show()
    }

    hideMenu = () => {
        this._menu.hide()
    }

    option1Click = () => {
        this.hideMenu()
        this.props.option1Click()
    }

    option2Click = () => {
        this.hideMenu()
        this.props.option2Click()
    }

    render() {
        return (
            <View>
                <Menu
                    ref={this.setMenuRef}
                    button={
                        <TouchableOpacity onPress={this.showMenu}>
                            <View style={{ padding: 12 }}>
                                <Icon
                                    name="ellipsis-v"
                                    color={Color.white}
                                    size={18}
                                />
                            </View>
                        </TouchableOpacity>
                    }>
                    <MenuItem onPress={this.option1Click}>Change Password</MenuItem>
                    <MenuItem onPress={this.option2Click}>Log Out</MenuItem>
                    <MenuDivider />
                </Menu>
            </View>
        )
    }
}