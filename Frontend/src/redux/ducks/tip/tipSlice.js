import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    tips: [],
    myTips: [],
    result: {},
    isFetching: false,
    error: null,
};

const tipSlice = createSlice({
    name: 'tip',

    initialState,

    reducers: {
        fetchTips: state => {
            console.log('Request fetchTips');
            state.isFetching = true;
            state.error = null;
        },

        fetchTipsAsync: (state, {payload: tips}) => {
            console.log('Saga fetchTipsAsync');
            state.tips = tips;
            state.isFetching = false;
        },

        fetchTipsAsyncFailed: (state, {payload: error}) => {
            console.log('Saga fetchTipsAsyncFailed');
            state.isFetching = false;
            state.error = error;
        },

        fetchMyTips: state => {
            console.log('Request fetchMyTips');
            state.isFetching = true;
            state.error = null;
        },

        fetchMyTipsAsync: (state, {payload: tips}) => {
            console.log('Saga fetchMyTipsAsync');
            state.myTips = tips;
            state.isFetching = false;
        },

        fetchMyTipsAsyncFailed: (state, {payload: error}) => {
            console.log('Saga fetchMyTipsAsyncFailed');
            state.isFetching = false;
            state.error = error;
        },

        postTip: state => {
            console.log('Request postTip');
            state.isFetching = true;
            state.error = null;
        },

        postTipAsync: (state, {payload: result}) => {
            console.log('Saga postTipAsync');
            state.result = result;
            state.isFetching = false;
        },

        postTipAsyncFailed: (state, {payload: error}) => {
            console.log('Saga postTipAsyncFailed');
            state.isFetching = false;
            state.error = error;
        },

        updateTip: state => {
            console.log('Request updateTip');
            state.isFetching = true;
            state.error = null;
        },
        updateTipAsync: (state, {payload: result}) => {
            console.log('Saga updateTipAsync');
            state.result = result;
            state.isFetching = true;
        },
        updateTipAsyncFailed: state => {
            console.log('Saga updateTipAsyncFailed');
            state.isFetching = true;
            state.error = null;
        },

        deleteTip: state => {
            console.log('Request deleteTip');
            state.isFetching = true;
            state.error = null;
            // where redux state should be updated
            // filter stuff
        },

        deleteTipAsync: (state, {payload: result}) => {
            console.log('Saga deleteTipAsync');
            state.isFetching = false;
            state.result = result;
        },

        deleteTipAsyncFailed: (state, {payload: error}) => {
            console.log('Saga deleteTipAsyncFailed');
            state.isFetching = false;
            state.error = error;
        },

        resetAPIStatus: state => {
            state.isFetching = false;
            state.error = null;
        },
    },
});

export const {
    fetchTips,
    fetchTipsAsync,
    fetchTipsAsyncFailed,
    fetchMyTips,
    fetchMyTipsAsync,
    fetchMyTipsAsyncFailed,
    postTip,
    postTipAsync,
    postTipAsyncFailed,
    updateTip,
    updateTipAsync,
    updateTipAsyncFailed,
    deleteTip,
    deleteTipAsync,
    deleteTipAsyncFailed,
    resetAPIStatus,
} = tipSlice.actions;

export const namespace = tipSlice.name;

export const tipReducer = tipSlice.reducer;
