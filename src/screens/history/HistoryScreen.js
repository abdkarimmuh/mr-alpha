import React, { Component } from "react"
import { connect } from "react-redux"
import { View } from "react-native"
import { TabView, TabBar } from "react-native-tab-view"
import { Procurement, TopUp } from "@app/screens"

import Color from "@app/assets/colors"
import { Metrics } from "@app/themes"

import HistoryRedux from "@app/redux/history"

type Props = {
    setCheck: any => void,
}

class HistoryScreen extends Component<Props> {

    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            routes: [
                { key: "one", title: "Procurement" },
                { key: "two", title: "Top Up" }
            ]
        }
    }

    componentDidMount() {
    }

    _renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: Color.white }}
            style={{ backgroundColor: Color.primaryColor }}
            labelStyle={{ fontWeight: "500" }}
            activeColor={Color.white}
            inactiveColor={Color.white50}
        />
    )

    _renderScene = ({ route }) => {
        switch (route.key) {
            case 'one':
                return <Procurement />
            case 'two':
                return <TopUp />
            default:
                return null
        }
    }

    changeIndex = (index) => {
        this.setState({ index })
        if (index === 0) {
            return this.props.setCheck(0)
        } else {
            return this.props.setCheck(6)
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TabView
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderTabBar={this._renderTabBar}
                    onIndexChange={index => this.changeIndex(index)}
                    initialLayout={{ width: Metrics.DEVICE_WIDTH }}
                    animationEnabled={true}
                    swipeEnabled={true}
                />
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setCheck: data => dispatch(HistoryRedux.actions.setCheck(data))
})

export default connect(null, mapDispatchToProps)(HistoryScreen)