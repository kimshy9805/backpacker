import {api} from '@utils';

const requestGetUser = async () => {
    let request = new Object();
    request.data = 'Hihi';

    console.log('before sending request get user : ', request);

    // data.append('request', JSON.stringify(request));

    return api
        .post('/api/user', request)
        .then(resp => {
            console.log('from request get user : ', resp);
            return resp.data;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
};

const requestUpdateUser = async action => {
    let data = new FormData();
    let request = new Object();

    request.request = 'user';
    request.condition = 'user';
    request.body = action.payload;

    console.log('before sending request update user : ', request);

    data.append('request', JSON.stringify(request));

    return api
        .post('/api/index.php', data)
        .then(response => {
            console.log('from request update user : ', response);
            return response.data;
        })
        .catch(error => {
            return error;
        });
};

export {requestGetUser, requestUpdateUser};
