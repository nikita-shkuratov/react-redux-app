import { FETCH_NEWS } from "./types";

const initialState = {
    fetchNews: []
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS:
            return { ...state, fetchNews: action.payload };
        default: return state;
    }
}



