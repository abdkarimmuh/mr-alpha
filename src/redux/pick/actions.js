import { SET_PICK, RESET_PICK } from "./types"

const setData = (data: any) => ({
    type: SET_PICK,
    payload: data
})

const resetPick = () => ({
    type: RESET_PICK
})

export default {
    setData, resetPick
}
