import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    myFollowers: [],
    myFollowings: [],

    result: {},
    isFetching: false,

    // Loading
    isFetchingMyFollowers: false,
    isFetchingMyFollowings: false,

    // Status
    fetchMyFollowersStatus: '',
    fetchMyFollowingsStatus: '',

    error: null,
};

const followSlice = createSlice({
    name: 'follow',

    initialState,

    reducers: {
        fetchMyFollowers: state => {
            console.log('Request fetchMyFollowers');
            state.isFetching = true;
            state.error = null;
        },

        fetchMyFollowersAsync: (state, {payload: followers}) => {
            console.log('Saga fetchMyFollowersAsync');
            state.myFollowers = followers;
            state.isFetching = false;
        },

        fetchMyFollowersAsyncFailed: (state, {payload: error}) => {
            console.log('Saga fetchMyFollowersAsyncFailed');
            state.isFetching = false;
            state.error = error;
        },

        fetchMyFollowings: state => {
            console.log('Request fetchMyFollowings');
            state.isFetching = true;
            state.error = null;
        },

        fetchMyFollowingsAsync: (state, {payload: following}) => {
            console.log('Saga fetchMyFollowingsAsync');
            state.myFollowings = following;
            state.isFetching = false;
        },

        fetchMyFollowingsAsyncFailed: (state, {payload: error}) => {
            console.log('Saga fetchMyFollowingsAsyncFailed');
            state.isFetching = false;
            state.error = error;
        },

        follow: state => {
            console.log('Request follow');
        },

        followAsync: (state, {payload: result}) => {
            console.log('Saga followAsync');
            state.result = result;
        },

        followAsyncFailed: (state, {payload: error}) => {
            console.log('Saga followAsyncFailed');
            state.error = error;
        },

        unfollow: state => {
            console.log('Request follow');
        },

        unfollowAsync: (state, {payload: result}) => {
            console.log('Saga unfollowAsync');
            state.result = result;
        },

        unfollowAsyncFailed: (state, {payload: error}) => {
            console.log('Saga unfollowAsyncFailed');
            state.error = error;
        },

        resetAPIStatus: state => {
            state.isFetching = null;
        },
    },
});

export const {
    fetchMyFollowers,
    fetchMyFollowersAsync,
    fetchMyFollowersAsyncFailed,
    fetchMyFollowings,
    fetchMyFollowingsAsync,
    fetchMyFollowingsAsyncFailed,
    follow,
    followAsync,
    followAsyncFailed,
    unfollow,
    unfollowAsync,
    unfollowAsyncFailed,
} = followSlice.actions;

export const namespace = followSlice.name;

export const followReducer = followSlice.reducer;
