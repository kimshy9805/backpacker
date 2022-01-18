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

        likeTweet: (state, {payload: {tweet_id, user_id}}) => {
            console.log('Request likeTweet');
            const tweet = state.tweets.find(tw => tw.tweet_id === tweet_id);
            tweet.users_like.push(user_id);
        },

        likeTweetAsync: (state, {payload: result}) => {
            console.log('Saga likeTweetAsync');
            state.result = result;
        },

        likeTweetAsyncFailed: (state, {payload: error}) => {
            console.log('Saga likeTweetAsyncFailed');
            state.error = error;
        },

        unlikeTweet: (state, {payload: {tweet_id, user_id}}) => {
            console.log('Request unlikeTweet');
            const tweet = state.tweets.find(tw => tw.tweet_id === tweet_id);
            tweet.users_like = tweet.users_like.filter(id => id !== user_id);
        },

        unlikeTweetAsync: (state, {payload: result}) => {
            console.log('Saga unlikeTweetAsync');
            state.result = result;
        },

        unlikeTweetAsyncFailed: (state, {payload: error}) => {
            console.log('Saga unlikeTweetAsyncFailed');
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
