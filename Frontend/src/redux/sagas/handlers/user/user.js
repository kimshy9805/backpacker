import {call, put} from 'redux-saga/effects';
import {Alert} from 'react-native';

import {signInUserAsync, signInUserAsyncFailed} from '@ducks/auth';
import {getUserAsync, getUserAsyncFailed} from '../../../../screens/ChatRoom/node_modules/@ducks/user';
import {requestGetUser, requestUpdateUser} from '@sagas/requests/user';

const getUserResp = {
    data: {},
    err: '',
};

export function* handleGetUser() {
    let resp;
    try {
        resp = yield call(requestGetUser);

        // Throw exceptions
        if (resp.data === undefined) {
            throw resp;
        }

        // Logic Error
        if (resp.err !== null) {
            throw resp.err;
        }

        let user = resp.data;

        yield put(getUserAsync(user));
    } catch (error) {
        yield put(getUserAsyncFailed(error));
    }
}

export function* handleUpdateUser(action) {
    let resp;

    try {
        resp = yield call(requestUpdateUser, action);

        // Throw exceptions
        if (resp.data === undefined) {
            throw resp;
        }

        // Logic Error
        if (resp.status === 'FAIL') {
            Alert.alert('NEON', resp.data);
            return;
        }

        let user = resp.data;
        yield put(updateUserAsync(user));
        yield put(getUser());
    } catch (error) {
        // HTTP Error
        Alert.alert('NEON', 'Something went wrong...');
        yield put(updateUserAsyncFailed(error));
    }
}
