import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';

import {Header, Follow} from './components';
import {styles, Sizes} from '@styles';
import {useSharedFollowTab} from './components/hooks';

const FollowScreen = ({route}) => {
    const {params} = route.params;
    const {setType} = useSharedFollowTab();

    useEffect(() => {
        setType(params);
    }, []);

    return (
        <SafeAreaView style={styles.container} forceInset={{bottom: 'never'}}>
            <Header />
            <ScrollView style={{}}>
                <Follow />
            </ScrollView>
        </SafeAreaView>
    );
};

export default FollowScreen;
