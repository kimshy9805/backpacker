import {api} from '@utils';

const reqFetchMyFollowers = async action => {
    console.log('before sending request fetchMyFollowers : ', action.payload);

    return api
        .get(`/api/comments?tweet=${action.payload}`)
        .then(resp => {
            console.log('from request fetchMyFollowers : ', resp);
            return resp;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
};

const reqFetchMyFollowings = async action => {
    console.log('before sending request fetchMyFollowings : ', action.payload);

    return api
        .get(`/api/replies/me`)
        .then(resp => {
            console.log('from request fetchMyFollowings : ', resp);
            return resp;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
};

const reqFollow = async action => {
    console.log('before sending request follow : ', action.payload);

    return api
        .get(`/api/replies/me`)
        .then(resp => {
            console.log('from request follow : ', resp);
            return resp;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
};

const reqUnfollow = async action => {
    console.log('before sending request unfollow : ', action.payload);

    return api
        .get(`/api/replies/me`)
        .then(resp => {
            console.log('from request unfollow : ', resp);
            return resp;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
};

export {reqFetchMyFollowers, reqFetchMyFollowings, reqFollow, reqUnfollow};
