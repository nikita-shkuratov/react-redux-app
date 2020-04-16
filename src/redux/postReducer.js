import { FETCH_POSTS } from "./types"

const initialState = {
    fetchPosts: []
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, fetchPosts: action.payload }
            
        default: return state
    }
}