import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: {
        name: 'nstory',
        email: 'neon@nstory.com',
        contact_number: 93935849,
        details: {
            images: ['https://picsum.photos/200'],
        },
        user_id: 25,
    },

    isFetching: null,
    error: null,
};

const userSlice = createSlice({
    name: 'user',

    initialState,

    reducers: {
        getUser: state => {
            console.log('Request getUser');
            state.isFetching = false;
            state.error = null;
        },

        getUserAsync: (state, {payload: user}) => {
            console.log('Saga getUserAsync');
            state.user = user;
            state.isFetching = true;
        },

        getUserAsyncFailed: (state, {payload: error}) => {
            console.log('Saga getUserAsyncFailed');
            state.isFetching = null;
            state.error = error;
        },

        resetAPIStatus: state => {
            state.isFetching = null;
        },
    },
});

export const {getUser, getUserAsync, getUserAsyncFailed, resetAPIStatus} =
    userSlice.actions;

export const namespace = userSlice.name;

export const userReducer = userSlice.reducer;
