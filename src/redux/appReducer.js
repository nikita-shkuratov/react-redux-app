import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from "./types"

const initialState = {
    loading: false,
    alert: {
        text: null,
        typeAlert: 'success'
    },
    registration: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return ({ ...state, loading: true })
        case HIDE_LOADER:
            return ({ ...state, loading: false })
        case SHOW_ALERT:
            return ({ ...state, alert: action.payload })
        case HIDE_ALERT:
            return ({ ...state, alert: { text: null } })
        default: return state
    }
}