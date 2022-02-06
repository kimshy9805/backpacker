import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, View, Image, StyleSheet} from 'react-native';
import moment from 'moment';
import Entypo from 'react-native-vector-icons/Entypo';

import {HorizontalLine, TextButton, ProfilePicture} from '@components';
import {Typography, Sizes, Colors, styles} from '@styles';

const SearchUserCard = props => {
    const {user, onPressProfile} = props;
    console.log(user);
    return (
        <View style={_styles.container}>
            <TouchableOpacity
                style={_styles.profileContainer}
                onPress={() => onPressProfile(user.user_id)}>
                <ProfilePicture size={35} image={user.details.profileImage} />
            </TouchableOpacity>
            <View style={_styles.detailContainer}>
                <Text style={_styles.name}>{user.name}</Text>
                <Text style={_styles.alias} ellipsizeMode={'tail'}>
                    {user.alias}
                </Text>
            </View>
        </View>
    );
};

export default SearchUserCard;

const _styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.black,
        padding: Sizes.padding,
    },

    profileContainer: {
        height: '100%',
        marginRight: Sizes.padding,
    },

    detailContainer: {
        justifyContent: 'flex-start',
        flex: 1,
    },

    name: {
        ...Typography.bold4,
        color: Colors.white,
        lineHeight: 15,
    },

    alias: {
        ...Typography.body4,
        color: 'grey',
        lineHeight: 18,
    },
});
