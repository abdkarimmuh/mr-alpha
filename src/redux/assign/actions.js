import { SET_ASSIGN, RESET_ASSIGN } from "./types"

const setData = (data: any) => ({
    type: SET_ASSIGN,
    payload: data
})

const resetAssign = () => ({
    type: RESET_ASSIGN
})

export default {
    setData, resetAssign
}
