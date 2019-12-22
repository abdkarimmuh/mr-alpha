import { SET_ASSIGN, RESET_ASSIGN } from "./types"

type State = {
    item: any[],
}

const initialState: State = {
    item: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ASSIGN: {
            return {
                ...state,
                item: action.payload
            }
        }
        case RESET_ASSIGN: {
            return initialState
        }
        default: {
            return state
        }
    }
}
