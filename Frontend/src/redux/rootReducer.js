import {combineReducers} from '@reduxjs/toolkit';

import {
    userReducer,
    authReducer,
    tweetReducer,
    replyReducer,
    followReducer,
} from './ducks';

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    tweet: tweetReducer,
    reply: replyReducer,
    follow: followReducer,
});

export default rootReducer;
