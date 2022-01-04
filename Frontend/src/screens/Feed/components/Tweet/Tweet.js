import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {data} from '@constants';
import {Marginer, TweetCard, HorizontalLine} from '@components';
import {styles, Sizes} from '@styles';

const Tweet = () => {
    const nav = useNavigation();

    useEffect(() => {
        console.log(data.tweets);
    }, []);

    const onPressProfile = userId => {
        nav.navigate('Profile', {userId: userId});
    };

    const onPressTweet = tweetId => {
        nav.navigate('Tweet', {tweetId: tweetId});
    };

    return (
        <View style={styles.tweetContainer}>
            <FlatList
                data={data.tweets}
                keyExtractor={item => `${item.tweetId}`}
                keyboardDismissMode="on-drag"
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={250}
                onEndReachedThreshold={0.01}
                renderItem={({item}) => {
                    return (
                        <TweetCard
                            tweet={item}
                            onPressProfile={onPressProfile}
                            onPressTweet={onPressTweet}
                        />
                    );
                }}
                ListFooterComponent={<Marginer margin={25} />}
                ListEmptyComponent={
                    <View style={styles.flexRowCenterCenter}>
                        <Text>No Tweet been found</Text>
                    </View>
                }
            />
        </View>
    );
};

export default Tweet;
