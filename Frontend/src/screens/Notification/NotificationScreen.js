import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';

import {styles} from '@styles';
import {Header} from './components';

const NotificationScreen = () => {
    const {t} = useTranslation();
    const navigation = useNavigation();

    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.container} forceInset={{bottom: 'never'}}>
            <Header />
            <ScrollView></ScrollView>
        </SafeAreaView>
    );
};

export default NotificationScreen;
