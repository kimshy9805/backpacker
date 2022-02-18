import {call, put} from 'redux-saga/effects';

import {
    getUserAsync,
    getUserAsyncFailed,
    updateUserAsync,
    updateUserAsyncFailed,
} from '@ducks/user';
import {requestGetUser, requestUpdateUser} from '@sagas/requests/user';
import {setError} from '@ducks/error';
import {errorHandler} from '@utils';

export function* handleGetUser() {
    let resp;
    try {
        resp = yield call(requestGetUser);

        if (resp.status === 'SUCCESS') {
            yield put(getUserAsync(resp.data));
            return;
        }
        if (resp.status === 'FAIL' && resp.data) {
            yield put(setError(resp.data));
            yield put(getUserAsyncFailed(resp.data));
            return;
        }
        throw resp;
    } catch (error) {
        errorHandler(error, true);
        yield put(getUserAsyncFailed(error));
    }
}

export function* handleUpdateUser(action) {
    let resp;
    try {
        resp = yield call(requestUpdateUser, action);

        if (resp.status === 'SUCCESS') {
            yield put(updateUserAsync(resp.data));
            return;
        }
        if (resp.status === 'FAIL' && resp.data) {
            yield put(setError(resp.data));
            yield put(updateUserAsyncFailed(resp.data));
            return;
        }
        throw resp;
    } catch (error) {
        errorHandler(error, true);
        yield put(updateUserAsyncFailed(error));
    }
}
