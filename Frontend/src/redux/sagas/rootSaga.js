import {takeEvery, takeLatest} from 'redux-saga/effects';

// handler
import {handleGetUser, handleUpdateUser} from './handlers/user';
import {
    handleRegisterUser,
    handleSignInUser,
    handleSignOutUser,
} from './handlers/auth';
import {
    handleFetchTweets,
    handleFetchMyTweets,
    handlePostTweet,
    handleLikeTweet,
    handleUnlikeTweet,
} from './handlers/tweet';
import {handleFetchComments, handleFetchMyComments} from './handlers/comment';
import {handleFetchMyTips} from './handlers/tip';
import {
    handleFetchMyFollowers,
    handleFetchMyFollowings,
    handleFollow,
    handleUnfollow,
} from './handlers/follow';

// duck
import {getUser, updateUser} from '@ducks/user';
import {registerUser, signInUser, signOutUser} from '@ducks/auth';
import {
    fetchTweets,
    fetchMyTweets,
    postTweet,
    likeTweet,
    unlikeTweet,
} from '@ducks/tweet';
import {fetchComments, fetchMyComments} from '@ducks/comment';
import {fetchMyTips} from '@ducks/tip';
import {
    fetchMyFollowers,
    fetchMyFollowings,
    follow,
    unfollow,
} from '@ducks/follow';

export function* watcherSaga() {
    // auth
    // yield takeLatest(registerUser.type, handleRegisterUser);
    // yield takeLatest(signInUser.type, handleSignInUser);
    // yield takeLatest(signOutUser.type, handleSignOutUser);

    // user
    yield takeLatest(getUser.type, handleGetUser);
    yield takeLatest(updateUser.type, handleUpdateUser);

    // tweet
    yield takeLatest(fetchTweets.type, handleFetchTweets);
    yield takeLatest(fetchMyTweets.type, handleFetchMyTweets);
    yield takeLatest(postTweet.type, handlePostTweet);
    yield takeLatest(likeTweet.type, handleLikeTweet);
    yield takeLatest(unlikeTweet.type, handleUnlikeTweet);

    // tip
    yield takeLatest(fetchMyTips.type, handleFetchMyTips);

    // comment
    yield takeLatest(fetchComments.type, handleFetchComments);
    yield takeLatest(fetchMyComments.type, handleFetchMyComments);

    // follow
    yield takeLatest(fetchMyFollowers.type, handleFetchMyFollowers);
    yield takeLatest(fetchMyFollowings.type, handleFetchMyFollowings);
    yield takeLatest(follow.type, handleFollow);
    yield takeLatest(unfollow.type, handleUnfollow);

    // chat
}
