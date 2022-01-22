import {call, put} from 'redux-saga/effects';
import {Alert} from 'react-native';

import {
    fetchRepliesAsync,
    fetchRepliesAsyncFailed,
    fetchMyRepliesAsync,
    fetchMyRepliesAsyncFailed,
} from '@ducks/reply';
import {reqFetchReplies, reqFetchMyReplies} from '@sagas/requests/reply';

export function* handleFetchReplies(action) {
    let resp;
    try {
        resp = yield call(reqFetchReplies, action);

        // // Throw exceptions
        // if (resp.data === undefined) {
        //     throw resp;
        // }

        // // Logic Error
        // if (resp.err !== null) {
        //     throw resp.err;
        // }

        yield put(fetchRepliesAsync(resp.data));
    } catch (error) {
        yield put(fetchRepliesAsyncFailed(error));
    }
}

export function* handleFetchMyReplies(action) {
    let resp;
    try {
        resp = yield call(reqFetchMyReplies, action);

        // // Throw exceptions
        // if (resp.data === undefined) {
        //     throw resp;
        // }

        // // Logic Error
        // if (resp.err !== null) {
        //     throw resp.err;
        // }

        yield put(fetchMyRepliesAsync(resp.data));
    } catch (error) {
        yield put(fetchMyRepliesAsyncFailed(error));
    }
}
