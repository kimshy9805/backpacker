import {combineReducers} from '@reduxjs/toolkit';

import {userReducer, authReducer, tweetReducer} from './ducks';

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    tweet: tweetReducer,
});

export default rootReducer;
