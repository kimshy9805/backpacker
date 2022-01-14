import React, {useState, useEffect} from 'react';
import {View, Text, Animated, FlatList, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {data} from '@constants';
import {Marginer, TweetCard, Loader} from '@components';
import {styles, Sizes, Colors} from '@styles';
import {fetchTweets, resetAPIStatus} from '@ducks/tweet';

const Tweets = ({scrollY}) => {
    const nav = useNavigation();

    const dispatch = useDispatch();
    const {isFetching, error, tweets} = useSelector(state => state.tweet);

    const [_tweets, _setTweets] = useState(tweets);
    const [stopFetch, setStopFetch] = useState(false);

    useEffect(() => {
        if (error === null) return;

        Alert.alert('backpacker', 'Something went wrong...');
        dispatch(resetAPIStatus);
    }, [error]);

    useEffect(() => {
        dispatch(fetchTweets());
    }, []);

    // useEffect(() => {
    //     _setTweets(tweets);
    // }, [tweets]);

    const onPressProfile = userId => {
        nav.navigate('Profile', {userId: userId});
    };

    const onPressTweet = tweet => {
        nav.navigate('Thread', {tweet});
    };

    const handleOnEndReached = () => {
        if (!stopFetch) {
            console.log('hho');
            setStopFetch(true);
        }
    };

    if (isFetching) {
        return <Loader />;
    }

    return (
        <View style={styles.tweetContainer}>
            <Animated.FlatList
                data={_tweets}
                keyExtractor={item => `${item.tweet_id}`}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {y: scrollY.current},
                            },
                        },
                    ],
                    {useNativeDriver: true},
                )}
                keyboardDismissMode="on-drag"
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
                ListFooterComponent={() => isFetching && <Loader />}
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

export default Tweets;
