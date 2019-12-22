import { combineReducers } from "redux"
import temp from "./temp"
import user from "./user"
import pick from "./pick"
import assign from "./assign"
import proc from "./proc"
import history from "./history"
import notif from "./notif"

export default combineReducers({
    temp: temp.reducer,
    user: user.reducer,
    pick: pick.reducer,
    assign: assign.reducer,
    proc: proc.reducer,
    history: history.reducer,
    notif: notif.reducer,
})
