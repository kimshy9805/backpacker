import {api} from '@utils';

const reqGetUser = async () => {
    console.log('before sending request get user : ');

    return api
        .get('/api/user')
        .then(resp => {
            console.log('from request get user : ', resp);
            return resp;
        })
        .catch(err => {
            return err;
        });
};

const reqUpdateUser = async action => {
    console.log('before sending request update user : ', action.payload);

    return api
        .post('/api/user', action.payload)
        .then(resp => {
            console.log('from request update user : ', resp);
            return resp;
        })
        .catch(error => {
            return error;
        });
};

export {reqGetUser, reqUpdateUser};
