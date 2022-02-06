import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {useBetween} from 'use-between';

import {styles, Colors, Typography, Sizes} from '@styles';
import {ProfilePicture} from '@components';
import {useSharedFormTweet} from '../../hooks';

const NewTweet = () => {
    const {user} = useSelector(state => state.user);

    const {content, onChangeContent, resetContent} = useSharedFormTweet();

    useEffect(() => {
        return () => {
            resetContent();
        };
    }, []);

    return (
        <View style={styles.newTweetContainer}>
            <ProfilePicture image={user.details.profileImage} />
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
