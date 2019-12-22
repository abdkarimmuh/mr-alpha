import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { View } from "react-native"
import { CustomMenuHistory } from "@app/screens"
import { Api } from "@app/api"

import HistoryRedux from "@app/redux/history"
import UserRedux from "@app/redux/user"

type Props = {
    token: string,
    check: integer,
    setHistory: any => void,
    setCheck: any => void,
    resetHistory: any => void,
}

class HistoryMenu extends PureComponent<Props> {

    constructor(props) {
        super(props)
        this.state = {
            error: true
        }
    }

    componentDidMount() {
    }

    pressStatusAll = async () => {
        this.props.resetHistory()
        this.props.setCheck(0)

        Api.get()
            .procurement(this.props.token)
            .then(res => {
                console.log("Res Status : ", res.data)
                this.props.setHistory(res.data.data)
                this.setState({ error: false })
            })
            .catch(error => {
                console.log("ERROR", error)
                this.setState({ error: true })
            })
    }

    pressStatus = async (data) => {
        this.props.resetHistory()
        this.props.setCheck(data)

        Api.get()
            .procurementStatus(this.props.token, data)
            .then(res => {
                console.log("Res Status : ", res)
                this.props.setHistory(res.data.data)
                this.setState({ error: false })
            })
            .catch(error => {
                console.log("ERROR", error)
                this.setState({ error: true })
            })
    }

    render() {
        if (this.props.check <= 5) {
            return (
                <View style={{ flexDirection: "row", marginRight: 12 }}>
                    <CustomMenuHistory
                        option1Click={() => this.pressStatusAll()}
                        option2Click={() => this.pressStatus(1)}
                        option3Click={() => this.pressStatus(2)}
                        option4Click={() => this.pressStatus(3)}
                        option5Click={() => this.pressStatus(4)}
                        option6Click={() => this.pressStatus(5)}
                        click={this.props.check}
                    />
                </View>
            )
        } else {
            return (<View></View>)
        }
    }
}

const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state),
    check: HistoryRedux.selectors.check(state)
})

const mapDispatchToProps = dispatch => ({
    setHistory: data => dispatch(HistoryRedux.actions.setData(data)),
    setCheck: data => dispatch(HistoryRedux.actions.setCheck(data)),
    resetHistory: () => dispatch(HistoryRedux.actions.resetHistory()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HistoryMenu)