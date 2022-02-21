import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    comments: [],
    myComments: [],
    result: {},
    isFetching: false,
    error: null,
};

const commentSlice = createSlice({
    name: 'comment',

    initialState,

    reducers: {
        fetchComments: state => {
            console.log('Request fetchComments');
            state.isFetching = true;
            state.error = null;
        },

        fetchCommentsAsync: (state, {payload: comments}) => {
            console.log('Saga fetchCommentsAsync');
            state.comments = comments;
            state.isFetching = false;
        },

        fetchCommentsAsyncFailed: (state, {payload: error}) => {
            console.log('Saga fetchCommentsAsyncFailed');
            state.isFetching = false;
            state.error = error;
        },

        fetchMyComments: state => {
            console.log('Saga fetchMyComments');
            state.isFetching = true;
            state.error = null;
        },

        fetchMyCommentsAsync: (state, {payload: myComments}) => {
            console.log('Saga fetchMyCommentsAsync');
            state.myComments = myComments;
            state.isFetching = false;
        },

        fetchMyCommentsAsyncFailed: (state, {payload: error}) => {
            console.log('Saga fetchMyCommentsAsyncFailed');
            state.isFetching = false;
            state.error = error;
        },

        postComment: state => {
            console.log('Request postComment');
            state.isFetching = true;
            state.error = null;
        },

        postCommentAsync: (state, {payload: result}) => {
            console.log('Saga postCommentAsync');
            state.result = result;
            state.isFetching = false;
        },

        postCommentAsyncFailed: (state, {payload: error}) => {
            console.log('Saga postCommentAsyncFailed');
            state.isFetching = false;
            state.error = error;
        },

        updateComment: state => {
            console.log('Request updateComment');
            state.isFetching = true;
            state.error = null;
        },

        updateCommentAsync: (state, {payload: result}) => {
            console.log('Saga updateCommentAsync');
            state.result = result;
            state.isFetching = false;
        },

        updateCommentAsyncFailed: (state, {payload: error}) => {
            console.log('Saga updateCommentAsyncFailed');
            state.isFetching = false;
            state.error = error;
        },

        deleteComment: state => {
            console.log('Request deleteComment');
            state.isFetching = true;
            state.error = null;
        },

        deleteCommentAsync: (state, {payload: result}) => {
            console.log('Request deleteComment');
            state.result = result;
            state.isFetching = false;
        },

        deleteCommentAsyncFailed: (state, {payload: error}) => {
            console.log('Request deleteComment');
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
    fetchComments,
    fetchCommentsAsync,
    fetchCommentsAsyncFailed,
    fetchMyComments,
    fetchMyCommentsAsync,
    fetchMyCommentsAsyncFailed,
    postComment,
    postCommentAsync,
    postCommentAsyncFailed,
    updateComment,
    updateCommentAsync,
    updateCommentAsyncFailed,
    deleteComment,
    deleteCommentAsync,
    deleteCommentAsyncFailed,
    resetAPIStatus,
} = commentSlice.actions;

export const namespace = commentSlice.name;

export const commentReducer = commentSlice.reducer;
