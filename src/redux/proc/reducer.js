import { SET_PROC, RESET_PROC } from "./types"

type State = {
    item: any[],
}

const initialState: State = {
    item: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PROC: {
            return {
                ...state,
                item: action.payload
            }
        }
        case RESET_PROC: {
            return initialState
        }
        default: {
            return state
        }
    }
}
