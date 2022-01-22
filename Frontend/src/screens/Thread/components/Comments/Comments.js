import React, {useEffect} from 'react';
import {View, Text, Animated, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {Marginer, CommentCard, Loader, HorizontalLine} from '@components';
import {styles, Sizes, Colors, Typography} from '@styles';
import {fetchReplies, resetAPIStatus} from '@ducks/reply';

const Comments = ({tweet}) => {
    const nav = useNavigation();

    const dispatch = useDispatch();
    const {isFetching, error, replies} = useSelector(state => state.reply);

    useEffect(() => {
        dispatch(fetchReplies(tweet.tweet_id));
    }, []);

    useEffect(() => {
        if (error === null) return;

        Alert.alert('backpacker', 'Something went wrong...');
        dispatch(resetAPIStatus);
    }, [error]);

    const onPressProfile = userId => {
        nav.navigate('Profile', {userId: userId});
    };

    const onPressTweet = tweet => {
        nav.navigate('Thread', {tweet: tweet});
    };

    const onRefresh = () => {
        dispatch(fetchComments());
    };

    if (isFetching) {
        return <Loader />;
    }

    return (
        <View style={styles.tweetContainer}>
            <Animated.FlatList
                data={replies}
                keyExtractor={item => `${item.comment_id}`}
                keyboardDismissMode="on-drag"
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={250}
                onEndReachedThreshold={0.01}
                // bounces={false}
                renderItem={({item}) => {
                    return (
                        <CommentCard
                            comment={item}
                            onPressProfile={onPressProfile}
                        />
                    );
                }}
                ItemSeparatorComponent={() => {
                    return (
                        <View
                            style={{
                                backgroundColor: Colors.black,
                            }}>
                            <HorizontalLine margin={5} />
                        </View>
                    );
                }}
                ListFooterComponent={
                    <View style={{backgroundColor: Colors.black}}>
                        <Marginer margin={25} />
                    </View>
                }
                ListEmptyComponent={
                    <View
                        style={[
                            styles.flexRowCenterCenter,
                            {backgroundColor: Colors.black},
                        ]}>
                        <Text
                            style={{...Typography.body5, color: Colors.white}}>
                            No Comment been found
                        </Text>
                    </View>
                }
                refreshing={isFetching}
                onRefresh={onRefresh}
            />
        </View>
    );
};

export default Comments;
