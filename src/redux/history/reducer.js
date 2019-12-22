import { SET_HISTORY, RESET_HISTORY, SET_CHECK } from "./types"

type State = {
    item: any[],
    check: integer,
}

const initialState: State = {
    item: [],
    check: 0,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_HISTORY: {
            return {
                ...state,
                item: action.payload
            }
        }
        case SET_CHECK: {
            return {
                ...state,
                check: action.payload
            }
        }
        case RESET_HISTORY: {
            return initialState
        }
        default: {
            return state
        }
    }
}
