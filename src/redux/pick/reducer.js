import { SET_PICK, RESET_PICK } from "./types"

type State = {
    item: any[],
}

const initialState: State = {
    item: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PICK: {
            return {
                ...state,
                item: action.payload
            }
        }
        case RESET_PICK: {
            return initialState
        }
        default: {
            return state
        }
    }
}
