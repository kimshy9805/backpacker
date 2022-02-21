import {api} from '@utils';

const reqFetchComments = async action => {
    console.log('before sending request fetchComments : ', action.payload);

    return api
        .post(`/api/comments`, action.payload)
        .then(resp => {
            console.log('from request fetchComments : ', resp);
            return resp;
        })
        .catch(err => {
            return err;
        });
};

const reqFetchMyComments = async action => {
    console.log('before sending request fetchMyComments : ', action.payload);

    return api
        .get(`/api/comments/me`)
        .then(resp => {
            console.log('from request fetchMyComments : ', resp);
            return resp;
        })
        .catch(err => {
            return err;
        });
};

export {reqFetchComments, reqFetchMyComments};
