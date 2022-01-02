import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    // Resgister
    isRegistering: false,
    isRegistered: false,

    // SignIn
    isAuthenticating: false,
    isAuthenticated: false,

    // SignOut
    isSigningOut: false,

    error: null,
};

const authSlice = createSlice({
    name: 'auth',

    initialState,

    reducers: {
        registerUser: state => {
            console.log('registerUser Saga Request');
            state.isRegistering = true;
            state.isRegistered = false;
            state.error = null;
        },

        registerUserAsync: state => {
            console.log('registerUser Saga Success');
            state.isRegistering = false;
            state.isRegistered = true;
        },

        registerUserAsyncFailed: (state, {payload: error}) => {
            console.log('registerUser Saga Failed');
            state.isRegistering = false;
            state.isRegistered = false;
            state.error = error;
        },

        signInUser: state => {
            console.log('signInUser Saga Request');
            state.isAuthenticating = true;
            state.isAuthenticated = false;
            state.error = null;
        },

        signInUserAsync: state => {
            console.log('signInUser Saga Success');
            state.isAuthenticating = false;
            state.isAuthenticated = true;
        },

        signInUserAsyncFailed: (state, {payload: error}) => {
            console.log('signInUser Saga Success');
            state.isAuthenticating = false;
            state.isAuthenticated = false;
            state.error = error;
        },

        signOutUser: state => {
            console.log('signOut Saga Request');
            state.isSigningOut = true;
            state.error = null;
        },

        signOutUserAsync: state => {
            console.log('signOut Saga Success');
            state.isSigningOut = false;
            state.isAuthenticated = false;
        },

        signOutUserAsyncFailed: (state, {payload: error}) => {
            console.log('signOut Saga Failed');
            state.isSigningOut = false;
            state.error = error;
        },
    },
});

export const {
    registerUser,
    registerUserAsync,
    registerUserAsyncFailed,
    signInUser,
    signInUserAsync,
    signInUserAsyncFailed,
    signOutUser,
    signOutUserAsync,
    signOutUserAsyncFailed,
} = authSlice.actions;

export const namespace = authSlice.name;

export const authReducer = authSlice.reducer;
