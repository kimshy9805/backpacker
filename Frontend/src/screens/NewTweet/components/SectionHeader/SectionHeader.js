import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {styles, Colors, Typography, Sizes} from '@styles';
import {ProfilePicture} from '@components';
import {data} from '@constants';

const SectionHeader = () => {
    const nav = useNavigation();

    const onClose = () => {
        nav.goBack();
    };

    const onPostTweet = () => {
        console.log('New tweet');
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
