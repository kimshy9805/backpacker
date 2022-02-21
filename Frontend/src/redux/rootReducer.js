import {combineReducers} from '@reduxjs/toolkit';

import {
    userReducer,
    authReducer,
    tweetReducer,
    commentReducer,
    followReducer,
    errorReducer,
} from './ducks';

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    tweet: tweetReducer,
    comment: commentReducer,
    follow: followReducer,
    error: errorReducer,
});

export default rootReducer;
