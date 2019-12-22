import { SET_PROC, RESET_PROC } from "./types"

const setData = (data: any) => ({
    type: SET_PROC,
    payload: data
})

const resetProc = () => ({
    type: RESET_PROC
})

export default {
    setData, resetProc
}
