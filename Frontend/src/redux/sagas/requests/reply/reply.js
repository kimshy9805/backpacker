import {api} from '@utils';

const reqFetchReplies = async action => {
    console.log('before sending request fetchReplies : ', action.payload);

    return api
        .get(`/api/comments?tweet=${action.payload}`)
        .then(resp => {
            console.log('from request fetchReplies : ', resp);
            return resp;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
};

const reqFetchMyReplies = async action => {
    console.log('before sending request fetchMyReplies : ', action.payload);

    return api
        .get(`/api/replies/me`)
        .then(resp => {
            console.log('from request fetchMyReplies : ', resp);
            return resp;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
};

export {reqFetchReplies, reqFetchMyReplies};
