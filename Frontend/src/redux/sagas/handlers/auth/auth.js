import {call, put} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

import {
    registerUserAsync,
    registerUserAsyncFailed,
    signInUserAsync,
    signInUserAsyncFailed,
    signOutUserAsync,
    signOutUserAsyncFailed,
} from '@ducks/auth';
import {getUser, resetUser} from '@ducks/user';
import {
    requestRegisterUser,
    requestSignInUser,
    requestSignOutUser,
} from '@sagas/requests/auth';

// register User
export function* handleRegisterUser(action) {
    let resp;
    try {
        resp = yield call(requestRegisterUser, action);

        // Throw exceptions
        if (resp.data === undefined) {
            throw resp;
        }

        // Logic Error
        if (resp.status === 'FAIL') {
            Alert.alert('NEON', resp.data);
            return;
        }

        let token = resp.data;

        AsyncStorage.setItem('token', token);

        yield put(registerUserAsync());
        // yield put(getUser());
    } catch (error) {
        // HTTP Error
        Alert.alert('NEON', 'Something went wrong...');
        yield put(registerUserAsyncFailed(error));
    }
}

export function* handleSignInUser(action) {
    let resp;
    try {
        resp = yield call(requestSignInUser, action);

        // Throw exceptions
        if (resp.data === undefined) {
            throw resp;
        }

        // Logic Error
        if (resp.status === 'FAIL') {
            Alert.alert('NEON', resp.data);
            return;
        }

        let token = resp.data;

        AsyncStorage.setItem('token', token);

        yield put(signInUserAsync());
        // yield put(getUser());
    } catch (error) {
        // HTTP Error
        Alert.alert('NEON', 'Something went wrong...');
        yield put(signInUserAsyncFailed(error));
    }
}

export function* handleSignOutUser() {
    let resp;
    try {
        resp = yield call(requestSignOutUser);

        // Throw exceptions
        if (resp.data === undefined) {
            throw resp;
        }

        // Logic Error
        if (resp.status === 'FAIL') {
            Alert.alert('NEON', resp.data);
            return;
        }

        AsyncStorage.removeItem('token');

        yield put(signOutUserAsync());
        // yield put(resetUser());
    } catch (error) {
        // HTTP Error
        Alert.alert('NEON', 'Something went wrong...');
        yield put(signOutUserAsyncFailed(error));
    }
}
