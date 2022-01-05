import {call, put} from 'redux-saga/effects';
import {Alert} from 'react-native';

import {signInUserAsync, signInUserAsyncFailed} from '@ducks/auth';
import {getUserAsync, getUserAsyncFailed} from '@ducks/user';
import {fetchTweetsAsync, fetchTweetsAsyncFailed} from '@ducks/tweet';

const fetchTweets = {
    data: {},
    err: '',
};

export function* handleFetchTweets() {
    let resp;
    try {
        resp = yield call(requestFetchTweets);

        // Throw exceptions
        if (resp.data === undefined) {
            throw resp;
        }

        // Logic Error
        if (resp.err !== null) {
            throw resp.err;
        }

        let result = resp.data;

        yield put(fetchTweetsAsync(user));
    } catch (error) {
        yield put(fetchTweetsAsyncFailed(error));
    }
}

const postTweet = {
    data: {},
    err: '',
};

export function* handlePostTweet(action) {
    let resp;

    try {
        resp = yield call(requestUpdateUser, action);

        // Throw exceptions
        if (resp.data === undefined) {
            throw resp;
        }

        // Logic Error
        if (resp.err !== null) {
            throw resp.err;
        }

        let result = resp.data;
        yield put(postTweetAsync(result));
    } catch (error) {
        // HTTP Error
        yield put(postTweetAsyncFailed(error));
    }
}
