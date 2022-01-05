import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';

import {SectionHeader, NewTweet} from './components';
import {styles} from '@styles';
import {HorizontalLine} from '@components';
import {resetGetUser} from '@ducks/user';

const NewTweetScreen = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.container} forceInset={{bottom: 'never'}}>
            <SectionHeader />
            <NewTweet />
        </SafeAreaView>
    );
};

export default NewTweetScreen;
