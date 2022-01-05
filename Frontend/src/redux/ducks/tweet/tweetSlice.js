import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    tweets: [],
    postTweetResult: {},
    isFetching: null,
    error: null,
};

const tweetSlice = createSlice({
    name: 'tweet',

    initialState,

    reducers: {
        fetchTweets: state => {
            console.log('Request fetchTweets');
            state.isFetching = false;
            state.error = null;
        },

        fetchTweetsAsync: (state, {payload: tweets}) => {
            console.log('Saga fetchTweetsAsync');
            state.tweets = tweets;
            state.isFetching = true;
        },

        fetchTweetsAsyncFailed: (state, {payload: error}) => {
            console.log('Saga fetchTweetsAsyncFailed');
            state.isFetching = null;
            state.error = error;
        },

        postTweet: state => {
            console.log('Request postTweet');
            state.isFetching = false;
            state.error = null;
        },

        postTweetAsync: (state, {payload: result}) => {
            console.log('Saga postTweetAsync');
            state.postTweetResult = tweets;
            state.isFetching = true;
        },

        postTweetAsyncFailed: (state, {payload: error}) => {
            console.log('Saga postTweetAsyncFailed');
            state.isFetching = null;
            state.error = error;
        },

        resetAPIStatus: state => {
            state.isFetching = null;
        },
    },
});

export const {
    fetchTweets,
    fetchTweetsAsync,
    fetchTweetsAsyncFailed,
    postTweet,
    postTweetAsync,
    postTweetAsyncFailed,
    resetAPIStatus,
} = tweetSlice.actions;

export const namespace = tweetSlice.name;

export const tweetReducer = tweetSlice.reducer;
