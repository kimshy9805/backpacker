import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
    GoogleSigninButton,
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import {
    AppleButton,
    AppleAuthError,
    appleAuth,
} from '@invertase/react-native-apple-authentication';
import {useDispatch, useSelector} from 'react-redux';

import {SelectButton, Marginer} from '@components';
import {icons} from '@constants';
import {Typography, styles, Sizes, Colors} from '@styles';
import {signInUser} from '@ducks/auth';

const SNSLinks = () => {
    const {isSignIn} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const _googleSignIn = async () => {
        if (isSignIn) {
            console.log('Already Logged In');
            alert('Already Logged In');
            return;
        }
        try {
            await GoogleSignin.hasPlayServices();
            const googleInfo = await GoogleSignin.signIn();
            let data = {
                email: googleInfo.user.email,
                name: googleInfo.user.name,
                login_method: 'google',
                identity: '',
            };
            dispatch(signInUser(data));
        } catch (error) {
            console.log(error);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // when user cancels sign in process,
                alert('Process Cancelled');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // when in progress already
                alert('Process in progress');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
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
    };

    const _appleSignIn = async () => {
        if (isSignIn) {
            console.log('Already Logged In');
            alert('Already Logged In');
            return;
        }
        try {
            // performs login request
            const appleAuthRequestResponse = await appleAuth.performRequest({
                requestedOperation: appleAuth.Operation.LOGIN,
                requestedScopes: [
                    appleAuth.Scope.EMAIL,
                    appleAuth.Scope.FULL_NAME,
                ],
            });

            // get current authentication state for user
            // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
            const credentialState = await appleAuth.getCredentialStateForUser(
                appleAuthRequestResponse.user,
            );
            console.log(appleAuthRequestResponse);
            // use credentialState response to ensure the user is authenticated
            if (credentialState === appleAuth.State.AUTHORIZED) {
                let data = {
                    email: appleAuthRequestResponse.email,
                    name: appleAuthRequestResponse.fullName.givenName,
                    login_method: 'apple',
                    identity: appleAuthRequestResponse.user,
                };
                dispatch(signInUser(data));
            }
        } catch (error) {
            if (error.code === AppleAuthError.CANCELLED) {
                // user cancelled Apple Sign-in
                console.log(error);
            } else {
                // other unknown error
                console.log(error);
            }
        }
    };

    return (
        <View style={{alignItems: 'center'}}>
            {/* Google */}
            <SelectButton
                onPress={() => _googleSignIn('google')}
                icon={icons.neon_google_logo}
                text={'Sign in with Google'}
                buttonStyle={{
                    width: '100%',
                    paddingHorizontal: 50,
                    borderWidth: 1,
                    borderRadius: 10,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    borderColor: '#bbb',
                }}
                iconStyle={{width: 18, height: 18, marginRight: 45}}
                textStyle={{...Typography.bold5}}
            />
            <Marginer margin={10} />
            {/* Facebook */}
            <SelectButton
                onPress={() => _facebookSignIn('facebook')}
                icon={icons.neon_facebook_logo2}
                text={'Sign in with Fackbook'}
                buttonStyle={{
                    width: '100%',
                    paddingHorizontal: 50,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#bbb',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    backgroundColor: Colors.facebook,
                }}
                iconStyle={{width: 18, height: 18, marginRight: 30}}
                textStyle={{
                    ...Typography.bold5,
                    color: Colors.white,
                }}
            />
            <Marginer margin={10} />
            {/* Apple */}
            <SelectButton
                onPress={() => _appleSignIn('apple')}
                icon={icons.neon_apple_logo}
                text={'Sign in with Apple'}
                buttonStyle={{
                    width: '100%',
                    paddingHorizontal: 50,
                    borderWidth: 1,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    borderRadius: 10,
                    borderColor: '#bbb',
                    backgroundColor: Colors.black,
                }}
                iconStyle={{width: 18, height: 18, marginRight: 50}}
                textStyle={{...Typography.bold5, color: Colors.white}}
            />
            <Marginer margin={10} />
        </View>
    );
};

export default SNSLinks;

{
    /* <TouchableOpacity
                // 현 버전에서는 메뉴얼 사인업 support 안함
                // onPress={() => navigation.navigate('SignUp', {})}
                style={{
                    height: 40,
                    width: 105,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>{t('SIGNIN_SCREEN_WITH_NEON')}</Text>
            </TouchableOpacity> */
}

// <AppleButton
// buttonStyle={AppleButton.Style.WHITE}
// buttonType={AppleButton.Type.SIGN_IN}
// style={{
//     width: '100%',
//     padding: 22,
//     borderWidth: 1,
//     borderRadius: 10,
//     borderColor: '#bbb',
//     marginBottom: 10,
// }}
// onPress={() => _appleSignIn()}
// />
// {/* Facebook */}
// <SelectButton
// onPress={() => _facebookSignIn('facebook')}
// icon={icons.neon_facebook_logo}
// text={'Fackbook'}
// buttonStyle={styles.SNSLinksButtonWrapper}
// iconStyle={{width: 18, height: 18, marginRight: 5}}
// textStyle={{fontSize: 15}}
// />
// {/* Google */}
// <GoogleSigninButton
// style={{
//     width: '100%',
//     padding: 22,
//     borderWidth: 1,
//     borderRadius: 10,
//     borderColor: '#bbb',
//     alignItems: 'center',
// }}
// size={GoogleSigninButton.Size.Standard}
// onPress={() => _googleSignIn('google')}
// // disabled={this.state.isSigninInProgress}
// />
