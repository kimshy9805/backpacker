import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useSelector, useDispatch} from 'react-redux';

import {styles} from '@styles';
import {Background, Details, Activities} from './components';
import {resetGetUser} from '@ducks/user';

const ProfileScreen = ({route}) => {
    // Variables
    const {user_id} = route.params;

    // Redux
    const dispatch = useDispatch();
    const {error} = useSelector(state => state.user);

    // API Requests
    useEffect(() => {
        console.log(user_id);
        // dispatch(getUser({userId: userId}));
    }, []);

    return (
        <SafeAreaView
            style={styles.container}
            forceInset={{bottom: 'never', top: 'never'}}>
            <Background />
            <Details />
            <Activities />
        </SafeAreaView>
    );
};

export default ProfileScreen;
