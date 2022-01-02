import {api} from '@utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const requestRegisterUser = action => {
    let data = new FormData();
    let request = new Object();
    request.request = 'user';
    request.condition = 'user';
    request.body = action.payload;
    request.body.verb = 'register';

    console.log('from request register user : ', request);

    data.append('request', JSON.stringify(request));

    return api
        .post('/api/index.php', data)
        .then(response => {
            console.log('from request register user : ', response);
            return response.data;
        })
        .catch(error => {
            return error;
        });
};

const requestSignInUser = action => {
    let data = new FormData();
    let request = new Object();
    
    request.request = 'user';
    request.condition = 'user';
    request.body = action.payload;
    request.body.verb = 'signin';

    console.log('from request sign in user : ', request);

    data.append('request', JSON.stringify(request));

    return api
        .post('/api/index.php', data)
        .then(response => {
            console.log('from request sign in user : ', response);
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return error;
        });
};

const requestSignOutUser = async () => {
    let data = new FormData();
    let request = new Object();
    request.request = 'user';
    request.condition = 'user';
    request.body = {token: token, verb: 'signout'};

    console.log('from request sign out user : ', request);

    data.append('request', JSON.stringify(request));

    return api
        .post('/api/index.php', data)
        .then(response => {
            console.log('from request sign out user : ', response);
            return response.data;
        })
        .catch(error => {
            return error;
        });
};

export {requestRegisterUser, requestSignInUser, requestSignOutUser};
