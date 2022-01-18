import {api} from '@utils';

const reqFetchComments = async action => {
    console.log('before sending request fetchTweets : ', request);

    return api
        .get(`/api/comments?tweet=${action.payload}`)
        .then(resp => {
            console.log('from request fetchTweets : ', resp);
            return resp;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
};

const requestGetMyTweets = async () => {
    let request = new Object();
};

export {reqFetchComments};
