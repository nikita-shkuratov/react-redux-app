import { SHOW_REGISTRATION, HIDE_REGISTRATION, SHOW_LOGIN, HIDE_LOGIN } from "./types"

const initialState = {
    modalRegistration: false,
    modalLogin: false
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_REGISTRATION:
            return { ...state, modalRegistration: true }
        case HIDE_REGISTRATION:
            return { ...state, modalRegistration: false }

        case SHOW_LOGIN:
            return { ...state, modalLogin: true }
        case HIDE_LOGIN:
            return { ...state, modalLogin: false }

        default: return state
    }
}