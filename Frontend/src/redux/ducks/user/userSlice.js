import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: {
        user_id: -1,
        email: '',
        alias: '',
        status: '',
        profile_image: '',
        description: '',
        details: {
            background_images: '',
            location: '',
            dob: '',
        },
        created_at: '',
        updated_at: '',
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
            state.updateUserStatus = initialState.updateUserStatus;
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
