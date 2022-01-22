import {combineReducers} from '@reduxjs/toolkit';

import {userReducer, authReducer, tweetReducer, replyReducer} from './ducks';

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    tweet: tweetReducer,
    reply: replyReducer,
});

export default rootReducer;
