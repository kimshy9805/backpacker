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
import {getUser, resetGetUser} from '@ducks/user';
import {signInUserAsync} from '@ducks/auth';

const AuthScreen = () => {
    const dispatch = useDispatch();
    const nav = useNavigation();

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        nav.navigate('SignIn');
        // 1. Check app version
        let updateNeeded = await VersionCheck.needUpdate();
        if (updateNeeded && updateNeeded.isNeeded) {
            nav.navigate('Update');
        }
        // 2. Check necessary permissions
        // await handlePermissions();

        // 3. Configure token
        const token = await config();
        if (token !== null) {
            // dispatch(signInUserAsync());
            // dispatch(getUser());
            return;
        }
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
