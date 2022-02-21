import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {HorizontalLine, Marginer, ProfilePicture} from '@components';
import {icons, images} from '@constants';
import {Typography, Sizes, Colors, styles} from '@styles';
import {likeTweet, unlikeTweet} from '@ducks/tweet';

const TweetCard = props => {
    const {tweet, onPressProfile, onPressTweet} = props;
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
        <View style={styles.tweetCardContainer}>
            {/* Profile Image */}
            <TouchableOpacity
                style={styles.tweetProfileContainer}
                onPress={() => onPressProfile(tweet.user_id)}>
                <ProfilePicture size={40} image={tweet.user?.profile_image} />
            </TouchableOpacity>
            {/* Tweet Detail */}
            <TouchableOpacity
                style={styles.tweetDetailContainer}
                onPress={() => onPressTweet(tweet)}>
                <View style={styles.tweetHeaderContainer}>
                    <View style={styles.tweetHeaderNames}>
                        <Text
                            style={{
                                marginRight: 5,
                                ...Typography.bold5,
                                color: Colors.white,
                            }}>
                            {tweet.user.alias}
                        </Text>
                        <Text
                            style={{
                                marginRight: 5,
                                ...Typography.body5,
                                color: Colors.white,
                            }}>
                            {moment(tweet.created_at).fromNow()}
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Image
                            source={icons.neon_arrow_down}
                            style={{width: 15, height: 15}}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
                {/* Content */}
                <View style={styles.tweetContentContainer}>
                    <Text style={{...Typography.body5, color: Colors.white}}>
                        {tweet.content}
                    </Text>
                    {tweet.details?.images && (
                        <Image
                            source={{uri: 'https://picsum.photos/200'}}
                            style={{
                                marginVertical: 10,
                                width: '100%',
                                height: 200,
                                borderRadius: Sizes.radius,
                            }}
                            resizeMode="cover"
                        />
                    )}
                </View>
                {/* Footer */}
                <View style={styles.tweetFooterContainer}>
                    <TouchableOpacity style={styles.flexRowCenter}>
                        <Feather
                            name={'message-circle'}
                            size={20}
                            color={'grey'}
                        />
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
                        <EvilIcons
                            name={'share-google'}
                            size={28}
                            color={'grey'}
                        />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default TweetCard;
