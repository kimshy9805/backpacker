import {useSelector, useDispatch} from 'react-redux';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';

import {registerUser} from '@ducks/auth';

const signIn = async (type, payload) => {
    const dispatch = useDispatch();

    let data;
    switch (type) {
        case 'google': {
            if (isLoggedIn) {
                console.log('hey you already logged in bitch');
                alert('bitch');
                return;
            }
            try {
                await GoogleSignin.hasPlayServices();
                const userInfo = await GoogleSignin.signIn();
                data = {type: 'google', user: userInfo};
                console.log(data);
                dispatch(registerUser(data));
            } catch (error) {
                console.log(error);
                if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                    // when user cancels sign in process,
                    alert('Process Cancelled');
                } else if (error.code === statusCodes.IN_PROGRESS) {
                    // when in progress already
                    alert('Process in progress');
                } else if (
                    error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE
                ) {
                    // when play services not available
                    alert('Play services are not available');
                } else {
                    // some other error
                    alert(
                        'Something else went wrong... ',
                        // error.toString(),
                    );
                }
            }
        }
        case 'manual': {
            console.log('TODO....');
        }
        default: {
            break;
        }
    }
};

export default {signIn};
