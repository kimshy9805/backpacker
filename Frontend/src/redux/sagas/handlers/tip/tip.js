import {call, put} from 'redux-saga/effects';

import {fetchMyTipsAsync, fetchMyTipsAsyncFailed} from '@ducks/tip';
import {reqFetchMyTips} from '@sagas/requests/tip';

export function* handleFetchMyTips() {
    let resp;
    try {
        resp = yield call(reqFetchMyTips);

        // // Throw exceptions
        // if (resp.data === undefined) {
        //     throw resp;
        // }

        // // Logic Error
        // if (resp.err !== null) {
        //     throw resp.err;
        // }

        yield put(fetchMyTipsAsync(resp.data));
    } catch (error) {
        yield put(fetchMyTipsAsyncFailed(error));
    }
}
