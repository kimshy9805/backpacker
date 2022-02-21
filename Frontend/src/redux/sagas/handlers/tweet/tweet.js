import {call, put} from 'redux-saga/effects';

import {
    fetchTweetsAsync,
    fetchTweetsAsyncFailed,
    fetchMyTweetsAsync,
    fetchMyTweetsAsyncFailed,
    likeTweetAsync,
    likeTweetAsyncFailed,
    unlikeTweetAsync,
    unlikeTweetAsyncFailed,
    postTweetAsync,
    postTweetAsyncFailed,
} from '@ducks/tweet';
import {
    reqFetchTweets,
    reqFetchMyTweets,
    reqPostTweet,
    reqLikeTweet,
    reqUnlikeTweet,
} from '@sagas/requests/tweet';
import {setError} from '@ducks/error';
import {errorHandler} from '@utils';

export function* handleFetchTweets() {
    try {
        const {data, status} = yield call(reqFetchTweets);
        if (status === 200) {
            yield put(fetchTweetsAsync(data));
            return;
        }
        if (status > 200) {
            yield put(setError('Something went wrong...'));
            yield put(fetchTweetsAsyncFailed(''));
            return;
        }
        throw new Error();
    } catch (error) {
        errorHandler(error, true);
        yield put(fetchTweetsAsyncFailed(error));
    }
}

export function* handleFetchMyTweets() {
    try {
        const {data, status} = yield call(reqFetchMyTweets);
        if (status === 200) {
            yield put(fetchMyTweetsAsync(data));
            return;
        }
        if (status > 200) {
            yield put(setError('Something went wrong...'));
            yield put(fetchMyTweetsAsyncFailed(''));
            return;
        }
        throw new Error();
    } catch (error) {
        errorHandler(error, true);
        yield put(fetchMyTweetsAsyncFailed(error));
    }
}

export function* handlePostTweet(action) {
    try {
        const {data, status} = yield call(reqPostTweet, action);
        if (status === 200) {
            yield put(postTweetAsync(data));
            return;
        }
        if (status > 200) {
            yield put(setError('Something went wrong...'));
            yield put(postTweetAsyncFailed(''));
            return;
        }
        throw new Error();
    } catch (error) {
        errorHandler(error, true);
        yield put(postTweetAsyncFailed(error));
    }
}

export function* handleLikeTweet(action) {
    try {
        const {data, status} = yield call(reqLikeTweet, action);
        if (status === 200) {
            yield put(likeTweetAsync(data));
            return;
        }
        if (status > 200) {
            yield put(setError('Something went wrong...'));
            yield put(likeTweetAsyncFailed(''));
            return;
        }
        throw new Error();
    } catch (error) {
        errorHandler(error, true);
        yield put(likeTweetAsyncFailed(error));
    }
}

export function* handleUnlikeTweet(action) {
    try {
        const {data, status} = yield call(reqUnlikeTweet, action);
        if (status === 200) {
            yield put(unlikeTweetAsync(data));
            return;
        }
        if (status > 200) {
            yield put(setError('Something went wrong...'));
            yield put(unlikeTweetAsyncFailed(''));
            return;
        }
        throw new Error();
    } catch (error) {
        errorHandler(error, true);
        yield put(unlikeTweetAsyncFailed(error));
    }
}
