import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: {
        user_id: 1,
        name: 'kay',
        status: 'ACTIVE',
        created_at: '2021-01-09T14:00:00+08:00',
        email: 'kimshy5840@naver.com',
        details: {
            profileImage: 'https://picsum.photos/200',
            backgraoundImage: 'https://picsum.photos/200',
            description: '난 영웅이야',
            location: 'Singapore',
            dob: '1997-10-27',
        },
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
