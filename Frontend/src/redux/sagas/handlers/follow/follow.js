import {call, put} from 'redux-saga/effects';
import {Alert} from 'react-native';

import {
    fetchMyFollowersAsync,
    fetchMyFollowersAsyncFailed,
    fetchMyFollowingsAsync,
    fetchMyFollowingsAsyncFailed,
    followAsync,
    followAsyncFailed,
    unfollowAsync,
    unfollowAsyncFailed,
} from '@ducks/follow';
import {
    reqFetchMyFollowers,
    reqFetchMyFollowings,
    reqFollow,
    reqUnfollow,
} from '@sagas/requests/follow';

const users = [
    {
        user_id: 1,
        name: 'asdf',
        status: 'ACTIVE',
        created_at: '2021-01-09T14:00:00+08:00',
        email: 'kimshy5840@naver.com',
        details: {
            images: ['https://picsum.photos/200'],
            description: '난 영웅이야',
        },
    },
    {
        user_id: 2,
        name: 'asdf',
        status: 'ACTIVE',
        created_at: '2021-01-09T14:00:00+08:00',
        email: 'kimshy5840@naver.com',
        details: {
            profileImage: ['https://picsum.photos/200'],
            backgraoundImage: 'https://picsum.photos/200',
            description: '난 영웅이야',
        },
    },
    {
        user_id: 3,
        name: 'asdf',
        status: 'ACTIVE',
        created_at: '2021-01-09T14:00:00+08:00',
        email: 'kimshy5840@naver.com',
        details: {
            images: ['https://picsum.photos/200'],
            description: '난 영웅이야',
        },
    },
    {
        user_id: 4,
        name: 'asdf',
        status: 'ACTIVE',
        created_at: '2021-01-09T14:00:00+08:00',
        email: 'kimshy5840@naver.com',
        details: {
            images: ['https://picsum.photos/200'],
            description: '난 영웅이야',
        },
    },
    {
        user_id: 5,
        name: 'asdf',
        status: 'ACTIVE',
        created_at: '2021-01-09T14:00:00+08:00',
        email: 'kimshy5840@naver.com',
        details: {
            images: ['https://picsum.photos/200'],
            description: '난 영웅이야',
        },
    },
    {
        user_id: 6,
        name: 'asdf',
        status: 'ACTIVE',
        created_at: '2021-01-09T14:00:00+08:00',
        email: 'kimshy5840@naver.com',
        details: {
            images: ['https://picsum.photos/200'],
            description: '난 영웅이야',
        },
    },
];

export function* handleFetchMyFollowers(action) {
    let resp;
    try {
        // resp = yield call(reqFetchMyFollowers, action);

        // // Throw exceptions
        // if (resp.data === undefined) {
        //     throw resp;
        // }

        // // Logic Error
        // if (resp.err !== null) {
        //     throw resp.err;
        // }

        yield put(fetchMyFollowersAsync(users));
    } catch (error) {
        yield put(fetchMyFollowersAsyncFailed(error));
    }
}

export function* handleFetchMyFollowings(action) {
    let resp;
    try {
        // resp = yield call(reqFetchMyFollowings, action);

        // // Throw exceptions
        // if (resp.data === undefined) {
        //     throw resp;
        // }

        // // Logic Error
        // if (resp.err !== null) {
        //     throw resp.err;
        // }

        yield put(fetchMyFollowingsAsync(users));
    } catch (error) {
        yield put(fetchMyFollowingsAsyncFailed(error));
    }
}

export function* handleFollow(action) {
    let resp;
    try {
        // resp = yield call(reqFollow, action);

        // // Throw exceptions
        // if (resp.data === undefined) {
        //     throw resp;
        // }

        // // Logic Error
        // if (resp.err !== null) {
        //     throw resp.err;
        // }

        yield put(followAsync('aa'));
    } catch (error) {
        yield put(followAsyncFailed(error));
    }
}

export function* handleUnfollow(action) {
    let resp;
    try {
        // resp = yield call(reqUnfollow, action);

        // // Throw exceptions
        // if (resp.data === undefined) {
        //     throw resp;
        // }

        // // Logic Error
        // if (resp.err !== null) {
        //     throw resp.err;
        // }

        yield put(unfollowAsync('aa'));
    } catch (error) {
        yield put(unfollowAsyncFailed(error));
    }
}
