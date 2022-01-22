import {api} from '@utils';

const reqFetchMyTips = async () => {
    console.log('before sending request reqFetchMyTips : ');

    return api
        .get(`/api/tips/me`)
        .then(resp => {
            console.log('from request reqFetchMyTips : ', resp);
            return resp;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
};

export {reqFetchMyTips};
