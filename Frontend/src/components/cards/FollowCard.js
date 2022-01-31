import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, View, Image, StyleSheet} from 'react-native';
import moment from 'moment';
import Entypo from 'react-native-vector-icons/Entypo';

import {HorizontalLine, TextButton, ProfilePicture} from '@components';
import {icons, images} from '@constants';
import {Typography, Sizes, Colors, styles} from '@styles';

const FollowCard = props => {
    const {follow, onPressProfile, onPressFollowing} = props;
    console.log(follow.details?.profileImage);
    return (
        <View style={_styles.container}>
            <TouchableOpacity
                style={_styles.profileContainer}
                onPress={() => onPressProfile(follow.user_id)}>
                <ProfilePicture
                    size={50}
                    image={follow.details?.profileImage}
                />
            </TouchableOpacity>
            <View style={_styles.detailContainer}>
                <Text style={_styles.name}>{follow.name}</Text>
                <Text style={_styles.email} ellipsizeMode={'tail'}>
                    {follow.email}
                </Text>
                <Text style={_styles.description}>
                    {follow.details?.description}
                </Text>
            </View>
            <TextButton
                onPress={onPressFollowing}
                label={'Following'}
                containerStyle={_styles.editButtonContainer}
                labelStyle={_styles.editButton}
            />
        </View>
    );
};

export default FollowCard;

const _styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.black,
        paddingTop: Sizes.padding,
        paddingHorizontal: Sizes.padding,
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

    email: {
        ...Typography.body4,
        color: 'grey',
        lineHeight: 18,
    },

    description: {
        ...Typography.body4,
        color: Colors.white,
    },
    editButtonContainer: {
        width: 100,
        height: 35,
        borderRadius: Sizes.radius * 2,
        borderWidth: 0.5,
        borderColor: 'grey',
        backgroundColor: 'transparent',
    },
    editButton: {
        color: Colors.white,
        ...Typography.bold5,
    },
});
