import { combineReducers } from 'redux'
import { postReducer } from './postReducer'
import { appReducer } from './appReducer'
import { userReducer } from './userReducer'
import { newsReducer } from './newsReducer'
import { modalReducer } from './modalReducer'
import { firebaseReducer } from './firebaseReducer'
import {loginReducer} from './loginReducer'

export const rootReducer = combineReducers({
    post: postReducer,
    user: userReducer,
    news: newsReducer,
    appLoader: appReducer,
    modal: modalReducer,
    baseUsers: firebaseReducer,
    login: loginReducer
})