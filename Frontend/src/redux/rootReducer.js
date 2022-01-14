import {combineReducers} from '@reduxjs/toolkit';

import {userReducer, authReducer, tweetReducer, commentReducer} from './ducks';

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    tweet: tweetReducer,
    comment: commentReducer,
});

export default rootReducer;
