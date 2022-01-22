import React, {useEffect, useRef} from 'react';
import {View, Animated, ActivityIndicator} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';

import {SectionHeader, Tweets, NewTweetButton, Header} from './components';
import {styles, Colors} from '@styles';

const {diffClamp} = Animated;
const headerHeight = 58 * 2;

const FeedScreen = () => {
    const dispatch = useDispatch();
    const {isFetching, error, tweets} = useSelector(state => state.tweet);

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
            <Header />
            {/* <SectionHeader translateY={translateY} /> */}
            <Tweets scrollY={scrollY} />
            <NewTweetButton />
        </SafeAreaView>
    );
};

export default FeedScreen;
