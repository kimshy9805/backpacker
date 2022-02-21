import {call, put} from 'redux-saga/effects';

import {
    getUserAsync,
    getUserAsyncFailed,
    updateUserAsync,
    updateUserAsyncFailed,
} from '@ducks/user';
import {reqGetUser, reqUpdateUser} from '@sagas/requests/user';
import {setError} from '@ducks/error';
import {errorHandler} from '@utils';

export function* handleGetUser() {
    try {
        const {data, status} = yield call(reqGetUser);
        if (status === 200) {
            yield put(getUserAsync(data));
            return;
        }
        if (status > 200) {
            yield put(setError('Something went wrong...'));
            yield put(getUserAsyncFailed(''));
            return;
        }
        throw new Error();
    } catch (error) {
        errorHandler(error, true);
        yield put(getUserAsyncFailed(error));
    }
}

export function* handleUpdateUser(action) {
    try {
        const {data, status} = yield call(reqUpdateUser, action);

        if (status === 200) {
            yield put(updateUserAsync(data));
            return;
        }
        if (status > 200) {
            yield put(setError('Something went wrong...'));
            yield put(updateUserAsyncFailed(''));
            return;
        }
        throw new Error();
    } catch (error) {
        errorHandler(error, true);
        yield put(updateUserAsyncFailed(error));
    }
}
