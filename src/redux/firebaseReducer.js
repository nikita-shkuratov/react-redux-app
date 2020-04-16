import { LOAD_REGISTRATION_USER, REGISTRATION_USER } from "./types"

const initialState = {
    users: []
}

export const firebaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION_USER:
            return{state}

        case LOAD_REGISTRATION_USER:
            return{...state, users: action.payload}
        default: return state
    }
}
