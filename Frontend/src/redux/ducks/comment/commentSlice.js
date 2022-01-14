import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    comments: [],
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

        deleteComment: state => {
            console.log('Request deleteComment');
            state.isFetching = true;
            state.error = null;
            // where redux state should be updated
            // filter stuff
        },

        deleteCommentAsync: (state, {payload: result}) => {},

        deleteCommentAsyncFailed: (state, {payload: error}) => {},

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
    postComment,
    postCommentAsync,
    postCommentAsyncFailed,
    resetAPIStatus,
} = commentSlice.actions;

export const namespace = commentSlice.name;

export const commentReducer = commentSlice.reducer;
