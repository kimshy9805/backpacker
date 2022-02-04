import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import {styles, Colors, Typography, Sizes} from '@styles';

const Header = () => {
    const nav = useNavigation();

    const onClose = () => {
        nav.goBack();
    };

    const onPostTweet = () => {
        console.log('New tweet');
    };

    return (
        <View style={styles.threadHeaderContainer}>
            <TouchableOpacity onPress={onClose}>
                <Feather name="arrow-left" size={30} color={Colors.primary} />
            </TouchableOpacity>
            <Text style={{...Typography.bold3, color: Colors.white}}>
                Thread
            </Text>
            <View style={{width: 30, height: 30}} />
        </View>
    );
};

export default Header;
