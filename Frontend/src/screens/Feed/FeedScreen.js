import React, {useEffect, useRef} from 'react';
import {View, Animated, ActivityIndicator} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';

import {SectionHeader, Tweets, Header} from './components';
import {styles, Colors} from '@styles';
import {NewTweetButton} from '@components';

const FeedScreen = () => {
    return (
        <SafeAreaView
            style={{flex: 1, backgroundColor: Colors.black}}
            forceInset={{bottom: 'never'}}>
            <Header />
            <Tweets />
            <NewTweetButton />
        </SafeAreaView>
    );
};

export default FeedScreen;
