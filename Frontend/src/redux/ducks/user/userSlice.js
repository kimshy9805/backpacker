import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: {
        user_id: 1,
        name: 'kay',
        alias: '@yigmmm042223',
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

    isFetching: false,

    // Loading
    isGettingUser: false,
    isUpdatingUser: false,

    // Status
    getUserStatus: '',
    updateUserStatus: '',

    error: null,
};

const userSlice = createSlice({
    name: 'user',

    initialState,

    reducers: {
        getUser: state => {
            console.log('Request getUser');
            state.isGettingUser = true;
        },

        getUserAsync: (state, {payload: user}) => {
            console.log('Saga getUserAsync');
            state.user = user;
            state.isGettingUser = false;
            state.getUserStatus = 'SUCCESS';
        },

        getUserAsyncFailed: (state, {payload: error}) => {
            console.log('Saga getUserAsyncFailed');
            state.isGettingUser = false;
            state.getUserStatus = 'FAIL';
        },

        updateUser: state => {
            console.log('Request updateUser');
            state.isUpdatingUser = true;
        },

        updateUserAsync: (state, {payload: user}) => {
            console.log('Saga updateUserAsync');
            state.user = user;
            state.isUpdatingUser = true;
        },
        updateUserAsyncFailed: (state, {payload: error}) => {
            console.log('Saga updateUserAsyncFailed');
            state.isUpdatingUser = true;
        },

        resetAPIStatus: state => {
            state.getUserStatus = initialState.getUserStatus;
        },
    },
});

export const {
    getUser,
    getUserAsync,
    getUserAsyncFailed,
    updateUser,
    updateUserAsync,
    updateUserAsyncFailed,
    resetAPIStatus,
} = userSlice.actions;

export const namespace = userSlice.name;

export const userReducer = userSlice.reducer;
