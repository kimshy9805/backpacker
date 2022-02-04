import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';

import {Marginer, TweetCard, Loader, HorizontalLine} from '@components';
import {styles, Sizes, Colors, Typography} from '@styles';
import {likeTweet, unlikeTweet, fetchTweets} from '@ducks/tweet';

const Tweet = ({tweet}) => {
    const nav = useNavigation();

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user);

    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        if (tweet.users_like.includes(user.user_id)) {
            setIsLiked(true);
        } else {
            setIsLiked(false);
        }
    }, [tweet]);

    const onLikeTweet = () => {
        if (isLiked) {
            setIsLiked(false);
            dispatch(
                unlikeTweet({tweet_id: tweet.tweet_id, user_id: user.user_id}),
            );
        } else {
            setIsLiked(true);
            dispatch(
                likeTweet({tweet_id: tweet.tweet_id, user_id: user.user_id}),
            );
        }
    };

    return (
        <View style={styles.threadTweetContainer}>
            <Text
                style={{
                    ...Typography.bold2,
                    color: Colors.white,
                    marginVertical: Sizes.padding,
                }}>
                {tweet.content}
            </Text>
            {tweet.details?.images && (
                <View style={{height: 400}}>
                    <Image
                        source={{url: 'https://picsum.photos/200'}}
                        resizeMode="contain"
                        style={{
                            height: '90%',
                        }}
                    />
                </View>
            )}
            <Text style={{...Typography.bold4, color: Colors.lightGray}}>
                {`${moment(tweet.updated_at).format('LLLL')}`}
            </Text>
            <HorizontalLine margin={10} />
            <Text
                style={{
                    ...Typography.bold4,
                    color: Colors.lightGray,
                }}>{`Like this tweet ${tweet.users_like.length}`}</Text>
            <HorizontalLine margin={10} />
            <View style={styles.flexRowCenterRound}>
                <TouchableOpacity style={styles.flexRowCenter}>
                    <Feather name={'message-circle'} size={20} color={'grey'} />
                    <Text style={styles.tweetFooterNumber}>
                        {tweet.comments_count}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.flexRowCenter}>
                    <EvilIcons name={'retweet'} size={28} color={'grey'} />
                    <Text style={styles.tweetFooterNumber}>
                        {tweet.comments_count}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.flexRowCenter}
                    onPress={onLikeTweet}>
                    <AntDesign
                        name={'hearto'}
                        size={20}
                        color={isLiked ? 'red' : 'grey'}
                    />
                    <Text style={styles.tweetFooterNumber}>
                        {tweet.users_like.length}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.flexRowCenter}>
                    <EvilIcons name={'share-google'} size={28} color={'grey'} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Tweet;
