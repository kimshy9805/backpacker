import React, {useState, useEffect} from 'react';
import {View, Text, Animated, StyleSheet, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';

import {TWEETS_FILTER} from '@constants';
import {Marginer, TweetCard, Loader} from '@components';
import {styles, Typography, Colors, Sizes} from '@styles';
import {fetchTweets, resetAPIStatus} from '@ducks/tweet';

const Tips = () => {
    const nav = useNavigation();

    const dispatch = useDispatch();
    const {isFetching, error, tweets} = useSelector(state => state.tweet);

    const [stopFetch, setStopFetch] = useState(false);
    const [category, setCategory] = useState(TWEETS_FILTER);
    const [categoryValue, setCategoryValue] = useState(null);
    const [categoryOpen, setCategoryOpen] = useState(false);

    useEffect(() => {
        if (error === null) return;

        Alert.alert('backpacker', 'Something went wrong...');
        dispatch(resetAPIStatus);
    }, [error]);

    useEffect(() => {
        dispatch(fetchTweets());
    }, []);

    const onPressProfile = userId => {
        nav.navigate('Profile', {user_id: userId});
    };

    const onPressTweet = tweet => {
        nav.navigate('Thread', {tweet_id: tweet.tweet_id});
    };

    const handleOnEndReached = () => {
        if (!stopFetch) {
            setStopFetch(true);
        }
    };

    if (isFetching) {
        return <Loader top={20} />;
    }

    return (
        <View style={styles.tweetContainer}>
            <View
                style={[
                    styles.flexRowCenterBetween,
                    {
                        flex: 1,
                        marginTop: Sizes.padding * 2,
                        marginBottom: Sizes.padding * 0.5,
                        paddingHorizontal: Sizes.padding,
                    },
                ]}>
                <Text style={_styles.tweetRelatedText}>
                    {`Check out tips! (${tweets.length})`}
                </Text>
            </View>
            <Animated.FlatList
                data={tweets}
                keyExtractor={item => {
                    return `tweet:${item.tweet_id}`;
                }}
                keyboardDismissMode="on-drag"
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={250}
                onEndReachedThreshold={0.01}
                // bounces={false}
                renderItem={({item}) => {
                    return (
                        <TweetCard
                            tweet={item}
                            onPressProfile={onPressProfile}
                            onPressTweet={onPressTweet}
                        />
                    );
                }}
                ListFooterComponent={
                    <View style={{height: 50, backgroundColor: Colors.black}} />
                }
                ListEmptyComponent={
                    <View
                        style={[
                            styles.flexRowCenterCenter,
                            {backgroundColor: Colors.black},
                        ]}>
                        <Text>No Tweet been found</Text>
                    </View>
                }
                onEndReached={handleOnEndReached}
                onEndReachedThreshold={0.5}
                onScrollBeginDrag={() => {
                    setStopFetch(false);
                }}
            />
        </View>
    );
};

export default Tips;

const _styles = StyleSheet.create({
    tweetRelatedText: {
        color: Colors.white,
        ...Typography.bold4,
    },

    dropDownPicker: {
        width: 80,
        height: 35,
        marginRight: Sizes.padding,
        borderColor: 'transparent',
    },
    dropDownContainerStyle: {
        width: '35%',
        borderColor: Colors.lightGray,
        backgroundColor: Colors.white,
        height: 100,
    },
});
