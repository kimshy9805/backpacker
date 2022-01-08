import React, {useState, useRef} from 'react';
import {View, Animated, StatusBar} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';

import {SectionHeader, Tweets, NewTweetButton} from './components';
import {styles} from '@styles';
import {HorizontalLine} from '@components';
import {resetGetUser} from '@ducks/user';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const {diffClamp} = Animated;
const headerHeight = 58 * 2;

const FeedScreen = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const scrollY = useRef(new Animated.Value(0));
    const scrollYClamped = diffClamp(scrollY.current, 0, headerHeight);
    const translateY = scrollYClamped.interpolate({
        inputRange: [0, headerHeight],
        outputRange: [0, -headerHeight],
    });

    const translateYNumber = useRef();

    translateY.addListener(({value}) => {
        translateYNumber.current = value;
    });

    return (
        <SafeAreaView
            style={{flex: 1, backgroundColor: Colors.black}}
            forceInset={{bottom: 'never'}}>
            <SectionHeader translateY={translateY} />
            <Tweets scrollY={scrollY} />
            <NewTweetButton />
        </SafeAreaView>
    );
};

export default FeedScreen;
