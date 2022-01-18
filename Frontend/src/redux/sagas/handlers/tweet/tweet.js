import {call, put} from 'redux-saga/effects';
import {Alert} from 'react-native';

import {
    fetchTweetsAsync,
    fetchTweetsAsyncFailed,
    likeTweetAsync,
    likeTweetAsyncFailed,
    unlikeTweetAsync,
    unlikeTweetAsyncFailed,
} from '@ducks/tweet';
import {
    reqFetchTweets,
    reqPostTweet,
    reqLikeTweet,
    reqUnlikeTweet,
} from '@sagas/requests/tweet';

export function* handleFetchTweets() {
    let resp;
    try {
        resp = yield call(reqFetchTweets);

        // // Throw exceptions
        // if (resp.data === undefined) {
        //     throw resp;
        // }

        // // Logic Error
        // if (resp.err !== null) {
        //     throw resp.err;
        // }

        yield put(fetchTweetsAsync(resp.data));
    } catch (error) {
        yield put(fetchTweetsAsyncFailed(error));
    }
}

export function* handlePostTweet(action) {
    let resp;

    try {
        resp = yield call(reqPostTweet, action);

        // Throw exceptions
        if (resp.data === undefined) {
            throw resp;
        }

        // Logic Error
        if (resp.err !== null) {
            throw resp.err;
        }

        yield put(postTweetAsync(resp.data));
    } catch (error) {
        // HTTP Error
        yield put(postTweetAsyncFailed(error));
    }
}

export function* handleLikeTweet(action) {
    let resp;
    try {
        resp = yield call(reqLikeTweet, action);
        // // Throw exceptions
        // if (resp.data === undefined) {
        //     throw resp;
        // }
        // // Logic Error
        // if (resp.err !== null) {
        //     throw resp.err;
        // }
        yield put(likeTweetAsync(resp.data));
    } catch (error) {
        yield put(likeTweetAsyncFailed(error));
    }
}

export function* handleUnlikeTweet(action) {
    let resp;
    try {
        resp = yield call(reqUnlikeTweet, action);
        // // Throw exceptions
        // if (resp.data === undefined) {
        //     throw resp;
        // }
        // // Logic Error
        // if (resp.err !== null) {
        //     throw resp.err;
        // }
        yield put(unlikeTweetAsync(resp.data));
    } catch (error) {
        yield put(unlikeTweetAsyncFailed(error));
    }
}
