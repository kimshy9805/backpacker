import {api} from '@utils';

const reqFetchTweets = async () => {
    let request = new Object();

    console.log('before sending request fetchTweets : ', request);

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

const reqLikeTweet = async action => {
    let request = new Object();

    console.log('before sending request reqLikeTweet : ', request);

    return api
        .post(`/api/tweet/${action.payload}/like`)
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
    let request = new Object();

    console.log('before sending request reqUnlikeTweet : ', request);

    return api
        .post(`/api/tweet/${action.payload}/unlike`)
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
    let data = new FormData();
    let request = new Object();

    request.request = 'user';
    request.condition = 'user';
    request.body = action.payload;

    console.log('before sending request reqPostTweet : ', request);

    data.append('request', JSON.stringify(request));

    return api
        .post('/api/index.php', data)
        .then(response => {
            console.log('from request reqPostTweet : ', response);
            return response.data;
        })
        .catch(error => {
            return error;
        });
};

export {reqFetchTweets, reqLikeTweet, reqUnlikeTweet, reqPostTweet};
