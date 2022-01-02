import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: {
        user_name: 'nstory',
        email: 'neon@nstory.com',
        contact_number: 93935849,
    },
};

const userSlice = createSlice({
    name: 'user',

    initialState,

    reducers: {
        getUser: state => {
            console.log('getUser Saga Request');
            state.isGetUserSuccess = false;
            state.error = null;
        },

        getUserAsync: (state, {payload: user}) => {
            console.log('getUser Saga Success');
            state.user = user;
            state.isGetUserSuccess = true;
        },

        getUserAsyncFailed: (state, {payload: error}) => {
            console.log('getUser Saga Failed');
            state.error = error;
            state.isGetUserSuccess = false;
        },

        resetGetUser: state => {
            state.isGetUserSuccess = null;
            state.error = null;
        },

        resetUser: state => {
            state.user = {
                user_name: 'nstory',
                email: 'neon@nstory.com',
                contact_number: 93935849,
                my_stores_no: [],
                my_deals_no: [],
                my_bookings_no: [],
                my_messages_no: [],
            };
            state.qr = {};
            state.myStores = [];
            state.myDeals = [];
            state.myBookings = [];
            state.myCoupons = [];
            state.myMessages = [];
            state.isLoggedIn = null;
            state.isSuccess = false;
        },
    },
});

export const {
    getUser,
    getUserAsync,
    getUserAsyncFailed,
    resetGetUser,
    resetUser,
} = userSlice.actions;

export const namespace = userSlice.name;

export const userReducer = userSlice.reducer;
