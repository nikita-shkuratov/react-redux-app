import { FETCH_USERS } from "./types"

const initialState = {
    fetchUsers: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return { ...state, fetchUsers: action.payload }

        default: return state
    }
}