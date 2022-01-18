import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';

import {styles, Colors, Typography, Sizes} from '@styles';
import {ProfilePicture} from '@components';
import {data} from '@constants';
import {postTweet} from '@ducks/tweet';
import {useSharedFormTweet} from '../../hooks';

const SectionHeader = () => {
    const nav = useNavigation();
    const dispatch = useDispatch();
    const {content, onChangeContent} = useSharedFormTweet();

    useEffect(() => {
        console.log(content);
    }, [content]);
    const onClose = () => {
        nav.goBack();
    };

    const onPostTweet = () => {
        dispatch(postTweet({content: content}));
        nav.goBack();
    };

    return (
        <View style={styles.newTweetHeaderContainer}>
            <TouchableOpacity onPress={onClose}>
                <AntDesign name="close" size={30} color={Colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.newTweetHeaderButtonContainer}
                onPress={onPostTweet}>
                <Text style={{...Typography.bold5, color: Colors.white}}>
                    Tweet
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default SectionHeader;
