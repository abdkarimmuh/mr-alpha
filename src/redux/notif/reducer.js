import { SET_NOTIF, RESET_NOTIF } from "./types"

type State = {
    item: any[],
}

const initialState: State = {
    item: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTIF: {
            return {
                ...state,
                item: action.payload
            }
        }
        case RESET_NOTIF: {
            return initialState
        }
        default: {
            return state
        }
    }
}
