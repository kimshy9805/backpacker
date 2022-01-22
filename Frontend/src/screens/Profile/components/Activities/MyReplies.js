import React, {useState, useEffect} from 'react';
import {View, Text, Animated, FlatList, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {data} from '@constants';
import {Marginer, TweetCard, Loader} from '@components';
import {styles, Sizes, Colors} from '@styles';
import {fetchMyTweets, resetAPIStatus} from '@ducks/tweet';

const MyReplies = () => {
    const nav = useNavigation();

    const dispatch = useDispatch();
    const {isFetching, error, myTweets} = useSelector(state => state.tweet);

    const [stopFetch, setStopFetch] = useState(false);

    useEffect(() => {
        if (error === null) return;

        Alert.alert('backpacker', 'Something went wrong...');
        dispatch(resetAPIStatus);
    }, [error]);

    useEffect(() => {
        dispatch(fetchMyTweets());
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
        return <Loader bottom={300} />;
    }

    return (
        <FlatList
            data={myTweets}
            keyExtractor={item => {
                return `tweet:${item.tweet_id}`;
            }}
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
    );
};

export default MyReplies;
