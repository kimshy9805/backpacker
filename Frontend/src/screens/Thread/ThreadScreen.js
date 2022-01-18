import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';

import {Header, Profile, Tweet, Comments, NewComment} from './components';
import {styles, Sizes} from '@styles';

const ThreadScreen = ({route}) => {
    const {tweet_id} = route.params;
    const {tweets} = useSelector(state => state.tweet);
    const [tweet, setTweet] = useState(
        tweets.find(tw => tw.tweet_id === tweet_id),
    );

    useEffect(() => {
        setTweet(tweets.find(tw => tw.tweet_id === tweet_id));
    }, [tweets]);

    return (
        <SafeAreaView style={styles.container} forceInset={{bottom: 'never'}}>
            <Header />
            <ScrollView style={{padding: Sizes.padding}}>
                <Profile tweet={tweet} />
                <Tweet tweet={tweet} />
                <Comments tweet={tweet} />
            </ScrollView>
            <NewComment />
        </SafeAreaView>
    );
};

export default ThreadScreen;
