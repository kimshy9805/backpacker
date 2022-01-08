import React, {useEffect} from 'react';
import {View, Text, Animated, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {data} from '@constants';
import {Marginer, TweetCard, HorizontalLine} from '@components';
import {styles, Sizes, Colors} from '@styles';
import {fetchTweets, resetAPIStatus} from '@ducks/tweet';

const Tweets = ({scrollY}) => {
    const nav = useNavigation();

    const dispatch = useDispatch();
    const {isFetching, error, tweets} = useSelector(state => state.tweet);

    useEffect(() => {
        console.log(data.tweets);
    }, []);

    useEffect(() => {
        if (error === null) return;

        Alert.alert('backpacker', 'Something went wrong...');
        dispatch(resetAPIStatus);
    }, [error]);

    const onPressProfile = userId => {
        nav.navigate('Profile', {userId: userId});
    };

    const onPressTweet = tweetId => {
        nav.navigate('Tweet', {tweetId: tweetId});
    };

    return (
        <View style={styles.tweetContainer}>
            <Animated.FlatList
                data={data.tweets}
                keyExtractor={item => `${item.tweetId}`}
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
                bounces={false}
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
                    <View style={{backgroundColor: Colors.black}}>
                        <Marginer margin={25} />
                    </View>
                }
                ListEmptyComponent={
                    <View style={styles.flexRowCenterCenter}>
                        <Text>No Tweet been found</Text>
                    </View>
                }
                // refreshing={isFetching}
                // onRefresh={fetchTweets}
            />
        </View>
    );
};

export default Tweets;
