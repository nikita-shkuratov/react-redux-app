import { FETCH_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, FETCH_USERS,FETCH_NEWS } from "./types";

export function fetchPost() {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await responce.json();
            setTimeout(() => {
                dispatch({ type: FETCH_POSTS, payload: json })
                dispatch(hideLoader())
                dispatch(showAlert('Posts uploaded successfully!'))
            }, 500)
        } catch (error) {
            dispatch(showAlert('Something went wrong!'))
        }
    }
}

export function fetchUsers() {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const responce = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await responce.json();
            setTimeout(() => {
                dispatch({ type: FETCH_USERS, payload: json })
                dispatch(hideLoader())
                dispatch(showAlert('Users uploaded successfully!'))
            }, 500)
        } catch (error) {
            dispatch(showAlert('Something went wrong!'))
        }
    }
}

export function fetchNews(searchQuery) {

    const BASE_PATH = 'https://hn.algolia.com/api/v1';
    const SEARCH_PATH = '/search';
    const SEARCH_PARAM = 'query=';

    return async dispatch => {
        try {
            dispatch(showLoader())
            const responce = await fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}`);
            const json = await responce.json();
            setTimeout(() => {
                dispatch({ type: FETCH_NEWS, payload: json })
                dispatch(hideLoader())
                !searchQuery ? dispatch(showAlert('News uploaded successfully!')) : dispatch(showAlert('Search news uploaded!'))
            }, 500)
        } catch (error) {
            dispatch(showAlert('Something went wrong!'))
        }
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })
        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)

    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT,
    }
}