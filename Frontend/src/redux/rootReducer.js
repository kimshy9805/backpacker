import {combineReducers} from '@reduxjs/toolkit';

import {
    userReducer,
    authReducer,
} from './ducks';

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
});

export default rootReducer;
