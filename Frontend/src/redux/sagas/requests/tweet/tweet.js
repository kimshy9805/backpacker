import {api} from '@utils';

const reqFetchTweets = async () => {
    console.log('before sending request fetchTweets');

    return api
        .get('/api/tweets')
        .then(resp => {
            console.log('from request fetchTweets : ', resp);
            return resp;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
};

const reqFetchMyTweets = async () => {
    console.log('before sending request fetchMyTweets');

    return api
        .get('/api/tweets/me')
        .then(resp => {
            console.log('from request fetchMyTweets : ', resp);
            return resp;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
};

const reqLikeTweet = async action => {
    console.log('before sending request reqLikeTweet : ', action.payload);

    return api
        .post(`/api/tweet/like`, action.payload)
        .then(resp => {
            console.log('from request reqLikeTweet : ', resp);
            return resp;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
};

const reqUnlikeTweet = async action => {
    console.log('before sending request reqUnlikeTweet : ', action.payload);

    return api
        .post(`/api/tweet/unlike`, action.payload)
        .then(resp => {
            console.log('from request reqUnlikeTweet : ', resp);
            return resp;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
};

const reqPostTweet = async action => {
    console.log('before sending request reqPostTweet : ', action.payload);

    return api
        .post('/api/tweets', action.payload)
        .then(response => {
            console.log('from request reqPostTweet : ', response);
            return response.data;
        })
        .catch(error => {
            return error;
        });
};

export {
    reqFetchTweets,
    reqFetchMyTweets,
    reqLikeTweet,
    reqUnlikeTweet,
    reqPostTweet,
};
