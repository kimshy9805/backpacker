import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {GOOGLE_SIGNIN_KEY, PUSHER_BEAM_APP_KEY} from './index';

const config = async () => {
    const token = await AsyncStorage.getItem('token');
    configureGoogleSign();
    return token;
};

//google signIn config
const configureGoogleSign = () => {
    GoogleSignin.configure({
        iosClientId: GOOGLE_SIGNIN_KEY,
        webClientId: GOOGLE_SIGNIN_KEY,
        offlineAccess: true,
        scopes: ['profile', 'email'],
        forceCodeForRefreshToken: true,
    });
};

