import { combineReducers } from 'redux';
import { postReducer } from './postReducer';
import { appReducer } from './appReducer';
import { userReducer } from './userReducer';
import {newsReducer} from './newsReducer';

export const rootReducer = combineReducers({
    post: postReducer,
    user: userReducer,
    news: newsReducer,
    appLoader: appReducer
})