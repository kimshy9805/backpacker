import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setError} from '@ducks/error';
import {call, put} from 'redux-saga/effects';

const url = __DEV__ ? 'http://localhost:8080' : 'https://dev.myneon.me';

const api = axios.create({
    baseURL: url,
    headers: {Accept: 'application/json', 'Content-type': 'application/json'},
    timeout: 6000,
});

//interceptor
api.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers['Token'] = token;
        }
        config.headers['Token'] = 'bd7aac6d-6c0c-4c45-85f0-2206091fc9f8';
        return config;
    },
    error => {
        return Promise.reject('Invalid token');
    },
);

//response
// api.interceptors.response.use(
//     async response => {
//         console.log(response);
//         // const responseToken = response.data.token;
//         // const token = await AsyncStorage.getItem('token');
//         // if (responseToken !== token) {
//         //     await AsyncStorage.removeItem('token');
//         //     await AsyncStorage.setItem('token');
//         // }
//     },
//     error => {
//         console.log(error);
//         // const fallbackValue = [
//         //     {
//         //         userId: 'Not authorized',
//         //         id: 'aerw15311sq',
//         //         title: 'Please try     again',
//         //         completed: false,
//         //     },
//         // ];
//         // return Promise.reject(fallbackValue);
//     },
// );

export default api;

export const setAuthToken = token => {
    if (token) {
        //applying token
        api.defaults.headers.common['Authorization'] = token;
    } else {
        //deleting the token from header
        delete api.defaults.headers.common['Authorization'];
    }
};
