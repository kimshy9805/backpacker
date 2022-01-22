import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    replies: [],
    myReplies: [],
    result: {},
    isFetching: false,
    error: null,
};

const replySlice = createSlice({
    name: 'reply',

    initialState,

    reducers: {
        fetchReplies: state => {
            console.log('Request fetchReplies');
            state.isFetching = true;
            state.error = null;
        },

        fetchRepliesAsync: (state, {payload: replies}) => {
            console.log('Saga fetchRepliesAsync');
            state.replies = replies;
            state.isFetching = false;
        },

        fetchRepliesAsyncFailed: (state, {payload: error}) => {
            console.log('Saga fetchRepliesAsyncFailed');
            state.isFetching = false;
            state.error = error;
        },

        fetchMyReplies: state => {
            console.log('Saga fetchMyReplies');
            state.isFetching = true;
            state.error = null;
        },

        fetchMyRepliesAsync: (state, {payload: replies}) => {
            console.log('Saga fetchMyRepliesAsync');
            state.myReplies = replies;
            state.isFetching = false;
        },

        fetchMyRepliesAsyncFailed: (state, {payload: error}) => {
            console.log('Saga fetchMyRepliesAsyncFailed');
            state.isFetching = false;
            state.error = error;
        },

        postReply: state => {
            console.log('Request postReply');
            state.isFetching = true;
            state.error = null;
        },

        postReplyAsync: (state, {payload: result}) => {
            console.log('Saga postReplyAsync');
            state.result = result;
            state.isFetching = false;
        },

        postReplyAsyncFailed: (state, {payload: error}) => {
            console.log('Saga postReplyAsyncFailed');
            state.isFetching = false;
            state.error = error;
        },

        updateReply: state => {
            console.log('Request updateReply');
            state.isFetching = true;
            state.error = null;
        },

        updateReplyAsync: (state, {payload: result}) => {
            console.log('Saga updateReplyAsync');
            state.result = result;
            state.isFetching = false;
        },

        updateReplyAsyncFailed: (state, {payload: error}) => {
            console.log('Saga updateReplyAsyncFailed');
            state.isFetching = false;
            state.error = error;
        },

        deleteReply: state => {
            console.log('Request deleteReply');
            state.isFetching = true;
            state.error = null;
            // where redux state should be updated
            // filter stuff
        },

        deleteReplyAsync: (state, {payload: result}) => {
            console.log('Request deleteReply');
            state.result = result;
            state.isFetching = false;
        },

        deleteReplyAsyncFailed: (state, {payload: error}) => {
            console.log('Request deleteReply');
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
    fetchReplies,
    fetchRepliesAsync,
    fetchRepliesAsyncFailed,
    fetchMyReplies,
    fetchMyRepliesAsync,
    fetchMyRepliesAsyncFailed,
    postReply,
    postReplyAsync,
    postReplyAsyncFailed,
    updateReply,
    updateReplyAsync,
    updateReplyAsyncFailed,
    deleteReply,
    deleteReplyAsync,
    deleteReplyAsyncFailed,
    resetAPIStatus,
} = replySlice.actions;

export const namespace = replySlice.name;

export const replyReducer = replySlice.reducer;
