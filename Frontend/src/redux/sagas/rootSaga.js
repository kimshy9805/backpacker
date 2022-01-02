import {takeEvery, takeLatest} from 'redux-saga/effects';

import {handleGetUser, handleUpdateUser} from './handlers/user';
import {
    handleRegisterUser,
    handleSignInUser,
    handleSignOutUser,
} from './handlers/auth';
import {getUser, updateUser} from '@ducks/user';
import {registerUser, signInUser, signOutUser} from '@ducks/auth';

export function* watcherSaga() {
    //auth
    yield takeLatest(registerUser.type, handleRegisterUser);
    yield takeLatest(signInUser.type, handleSignInUser);
    yield takeLatest(signOutUser.type, handleSignOutUser);

    //user
    yield takeLatest(getUser.type, handleGetUser);
    // yield takeLatest(updateUser.type, handleUpdateUser);
}
