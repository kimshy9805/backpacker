import React, {useState, useEffect, createRef} from 'react';
import {
    View,
    Text,
    Alert,
    Platform,
    Linking,
    NativeModules,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useSelector, useDispatch} from 'react-redux';
import {requestNotifications} from 'react-native-permissions';
import VersionCheck from 'react-native-version-check';
import {useNavigation} from '@react-navigation/native';

import {styles} from '@styles';
import {config, configurePusher} from '../../config';
import {getUser, resetAPIStatus} from '@ducks/user';
import {signInUserAsync} from '@ducks/auth';

const AuthScreen = () => {
    const nav = useNavigation();

    const dispatch = useDispatch();
    const {getUserStatus} = useSelector(state => state.user);

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        if (getUserStatus === '') return;
        if (getUserStatus === 'SUCCESS') {
            nav.navigate('Dashboard');
        } else {
            nav.navigate('SignIn');
        }
        dispatch(resetAPIStatus());
    }, [getUserStatus]);

    const init = async () => {
        // 1. Check app version
        let updateNeeded = await VersionCheck.needUpdate();
        if (updateNeeded && updateNeeded.isNeeded) {
            nav.navigate('Update');
        }
        // 2. Check necessary permissions
        // await handlePermissions();

        // 3. Dispatch getUser
        dispatch(getUser());
        return;
    };

    return (
        <SafeAreaView style={styles.container} forceInset={{bottom: 'never'}}>
            <View>
                <Text>First Page</Text>
            </View>
        </SafeAreaView>
    );
};

export default AuthScreen;
