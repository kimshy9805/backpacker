import {createSlice, current} from '@reduxjs/toolkit';

const initialState = {
    tweets: [],
    result: {},
    isFetching: false,
    error: null,
};

const tweetSlice = createSlice({
    name: 'tweet',

    initialState,

    reducers: {
        fetchTweets: state => {
            console.log('Request fetchTweets');
            state.isFetching = true;
            state.error = null;
        },

        fetchTweetsAsync: (state, {payload: tweets}) => {
            console.log('Saga fetchTweetsAsync');
            state.tweets = tweets;
            state.isFetching = false;
        },

        fetchTweetsAsyncFailed: (state, {payload: error}) => {
            console.log('Saga fetchTweetsAsyncFailed');
            state.isFetching = false;
            state.error = error;
        },

        postTweet: state => {
            console.log('Request postTweet');
            state.isFetching = true;
            state.error = null;
        },

        postTweetAsync: (state, {payload: result}) => {
            console.log('Saga postTweetAsync');
            state.result = result;
            state.isFetching = false;
        },

        postTweetAsyncFailed: (state, {payload: error}) => {
            console.log('Saga postTweetAsyncFailed');
            state.isFetching = false;
            state.error = error;
        },

        likeTweet: (state, {payload: {tweetId, userId}}) => {
            console.log('Request likeTweet');
            let ind = state.tweets.findIndex(tw => (tw.tweet_id = tweetId));
            state.tweets[ind].users_like.push(userId);
            state.isFetching = true;
        },

        likeTweetAsync: (state, {payload: result}) => {
            console.log('Saga likeTweetAsync');
            state.result = result;
            state.isFetching = false;
        },

        likeTweetAsyncFailed: (state, {payload: error}) => {
            console.log('Saga likeTweetAsyncFailed');
            state.isFetching = false;
            state.error = error;
        },

        unlikeTweet: (state, {payload: {tweetId, userId}}) => {
            console.log('Request unlikeTweet');
            let ind = state.tweets.findIndex(tw => (tw.tweet_id = tweetId));
            state.tweets[ind].users_like.filter(id => id !== userId);
            state.isFetching = true;
        },

        unlikeTweetAsync: (state, {payload: result}) => {
            console.log('Saga unlikeTweetAsync');
            state.isFetching = false;
            state.result = result;
        },

        unlikeTweetAsyncFailed: (state, {payload: error}) => {
            console.log('Saga unlikeTweetAsyncFailed');
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
    fetchTweets,
    fetchTweetsAsync,
    fetchTweetsAsyncFailed,
    postTweet,
    postTweetAsync,
    postTweetAsyncFailed,
    likeTweet,
    likeTweetAsync,
    likeTweetAsyncFailed,
    unlikeTweet,
    unlikeTweetAsync,
    unlikeTweetAsyncFailed,
    resetAPIStatus,
} = tweetSlice.actions;

export const namespace = tweetSlice.name;

export const tweetReducer = tweetSlice.reducer;
