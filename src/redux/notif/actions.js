import { SET_NOTIF, RESET_NOTIF } from "./types"

const setData = (data: any) => ({
    type: SET_NOTIF,
    payload: data
})

const resetNotif = () => ({
    type: RESET_NOTIF
})

export default {
    setData, resetNotif
}
