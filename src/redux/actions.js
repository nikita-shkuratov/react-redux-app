import { FETCH_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, FETCH_USERS, FETCH_NEWS, SHOW_REGISTRATION, HIDE_REGISTRATION, SHOW_LOGIN, HIDE_LOGIN, LOAD_REGISTRATION_USER, REGISTRATION_USER, LOGIN, LOGOUT } from "./types"

//=============API==================//
export function fetchPost() {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const responce = await fetch('https://jsonplaceholder.typicode.com/posts')
            const json = await responce.json()
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

            const res = await fetch('https://react-redux-app-63749.firebaseio.com/users.json')
            const toJson = await res.json()
            const getUsers = Object.keys(toJson).map(key => {
                return toJson[key]
            })

            const responce = await fetch('https://jsonplaceholder.typicode.com/users')
            const json = await responce.json()

            setTimeout(() => {
                dispatch({ type: FETCH_USERS, payload: [json, getUsers] })
                dispatch(hideLoader())
                dispatch(showAlert('Users uploaded successfully!'))
            }, 500)

        } catch (error) {
            dispatch(showAlert('Something went wrong!'))
        }
    }
}

export function fetchNews(searchQuery) {

    const BASE_PATH = 'https://hn.algolia.com/api/v1'
    const SEARCH_PATH = '/search'
    const SEARCH_PARAM = 'query='

    return async dispatch => {
        try {
            dispatch(showLoader())
            const responce = await fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}`)
            const json = await responce.json()
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

//=============LOADER==================//
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
//=============ALERT==================//
export function showAlert(text, typeAlert) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                text,
                typeAlert,
            }
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
//=============MODAL-REGISTRATION==================//

export function showReg() {
    return {
        type: SHOW_REGISTRATION,
    }
}

export function hideReg() {
    return {
        type: HIDE_REGISTRATION,
    }
}

//=============MODAL-LOGIN==================//

export function showLog() {
    return {
        type: SHOW_LOGIN,
    }
}

export function hideLog() {
    return {
        type: HIDE_LOGIN,
    }
}

//=============REGISTRATION==================//

export function fetchRegUsers() {
    return async dispatch => {
        try {
            const responce = await fetch('https://react-redux-app-63749.firebaseio.com/users.json')
            const json = await responce.json()
            const getUsers = Object.keys(json).map(key => {
                return json[key]
            })
            dispatch({ type: LOAD_REGISTRATION_USER, payload: getUsers })
        } catch (error) {
            dispatch(showAlert('Something went wrong!'))
        }
    }
}

export function regNewUser(dataUser) {
    return async dispatch => {
        try {
            const responce = await fetch('https://react-redux-app-63749.firebaseio.com/users.json', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(dataUser)
            })
            const answer = await responce.json()
            console.log('regNewUser', answer)
            dispatch({ type: REGISTRATION_USER })
        } catch (error) {
            dispatch(showAlert('Something went wrong!', error))
        }
    }
}
//=============LOGIN==================//

export function login() {
    return {
        type: LOGIN,
    }
}

export function logout() {
    return {
        type: LOGOUT,
    }
}
