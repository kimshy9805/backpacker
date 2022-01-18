import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {useBetween} from 'use-between';

import {styles, Colors, Typography, Sizes} from '@styles';
import {ProfilePicture} from '@components';
import {useSharedFormTweet} from '../../hooks';

const NewTweet = () => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user);

    const {content, onChangeContent, resetContent} = useSharedFormTweet();

    const [tweetText, setTweetText] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [newTweet, setNewTweet] = useState({});

    useEffect(() => {
        return () => {
            resetContent();
        };
    }, []);

    useEffect(() => {
        console.log(content);
    }, [content]);

    const onPostTweet = () => {
        dispatch(postTweet(newTweet));
    };

    return (
        <View style={styles.newTweetContainer}>
            <ProfilePicture image={user.details?.images[0]} />
            <View style={styles.newTweetInputContainer}>
                <TextInput
                    numberOfLines={3}
                    multiline={true}
                    value={content}
                    style={styles.newTweetInput}
                    placeholder={"What's happening?"}
                    placeholderTextColor={Colors.darkGray}
                    onChangeText={onChangeContent}
                />
            </View>
        </View>
    );
};

export default NewTweet;
