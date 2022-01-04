import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import moment from 'moment';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {HorizontalLine, Marginer, ProfilePicture} from '@components';
import {icons, images} from '@constants';
import {Typography, Sizes, Colors, styles} from '@styles';

const TweetCard = props => {
    const {tweet, onPressProfile, onPressTweet} = props;
    return (
        <View
            style={styles.tweetCardContainer}
            onPress={() => console.log(tweet)}>
            {/* Profile Image */}
            <TouchableOpacity
                style={styles.tweetProfileContainer}
                onPress={() => onPressProfile(tweet.user.userId)}>
                <ProfilePicture size={40} image={tweet.user.image} />
            </TouchableOpacity>
            {/* Tweet Detail */}
            <TouchableOpacity
                style={styles.tweetDetailContainer}
                onPress={() => onPressTweet(tweet.tweetId)}>
                <View style={styles.tweetHeaderContainer}>
                    <View style={styles.tweetHeaderNames}>
                        <Text style={{marginRight: 5, ...Typography.bold5}}>
                            {tweet.user.name}
                        </Text>
                        <Text style={{marginRight: 5, ...Typography.body6}}>
                            @{tweet.user.username}
                        </Text>
                        <Text style={{marginRight: 5, ...Typography.body5}}>
                            {moment(tweet.createdAt).fromNow()}
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
                    <Text style={{...Typography.body5}}>{tweet.content}</Text>
                    {tweet.image && (
                        <Image
                            source={{uri: tweet.image}}
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
                            {tweet.numberOfComments}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.flexRowCenter}>
                        <EvilIcons name={'retweet'} size={28} color={'grey'} />
                        <Text style={styles.tweetFooterNumber}>
                            {tweet.numberOfRetweets}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.flexRowCenter}>
                        <AntDesign name={'hearto'} size={20} color={'red'} />
                        <Text style={styles.tweetFooterNumber}>
                            {tweet.numberOfComments}
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