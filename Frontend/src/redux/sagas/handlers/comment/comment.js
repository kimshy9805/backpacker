import {call, put} from 'redux-saga/effects';

import {
    fetchCommentsAsync,
    fetchCommentsAsyncFailed,
    fetchMyCommentsAsync,
    fetchMyCommentsAsyncFailed,
} from '@ducks/comment';
import {reqFetchComments, reqFetchMyComments} from '@sagas/requests/comment';
import {setError} from '@ducks/error';
import {errorHandler} from '@utils';

export function* handleFetchComments(action) {
    try {
        const {data, status} = yield call(reqFetchComments, action);
        if (status === 200) {
            yield put(fetchCommentsAsync(data));
            return;
        }
        if (status > 200) {
            yield put(setError('Something went wrong...'));
            yield put(fetchCommentsAsyncFailed(''));
            return;
        }
        throw new Error();
    } catch (error) {
        errorHandler(error, true);
        yield put(fetchCommentsAsyncFailed(error));
    }
}

export function* handleFetchMyComments(action) {
    try {
        const {data, status} = yield call(reqFetchMyComments, action);
        if (status === 200) {
            yield put(fetchMyCommentsAsync(data));
            return;
        }
        if (status > 200) {
            yield put(setError('Something went wrong...'));
            yield put(fetchMyCommentsAsyncFailed(''));
            return;
        }
        throw new Error();
    } catch (error) {
        errorHandler(error, true);
        yield put(fetchMyCommentsAsyncFailed(error));
    }
}
