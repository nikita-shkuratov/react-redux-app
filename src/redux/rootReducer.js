import { combineReducers } from 'redux';
import { postReducer } from './postReducer';
import { appReducer } from './appReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    post: postReducer,
    appLoader: appReducer,
    user: userReducer
})