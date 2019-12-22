import { SET_HISTORY, RESET_HISTORY, SET_CHECK } from "./types"

const setData = (data: any) => ({
    type: SET_HISTORY,
    payload: data
})

const setCheck = data => ({
    type: SET_CHECK,
    payload: data
})

const resetHistory = () => ({
    type: RESET_HISTORY
})

export default {
    setData, setCheck, resetHistory
}
