import {call, put} from 'redux-saga/effects';
import {Alert} from 'react-native';

import {fetchCommentsAsync, fetchCommentsAsyncFailed} from '@ducks/comment';
import {reqFetchComments} from '@sagas/requests/comment';

export function* handleFetchComments(action) {
    let resp;
    try {
        resp = yield call(reqFetchComments, action);

        // // Throw exceptions
        // if (resp.data === undefined) {
        //     throw resp;
        // }

        // // Logic Error
        // if (resp.err !== null) {
        //     throw resp.err;
        // }

        yield put(fetchCommentsAsync(resp.data));
    } catch (error) {
        yield put(fetchCommentsAsyncFailed(error));
    }
}
