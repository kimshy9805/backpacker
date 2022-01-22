import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, View, Image, StyleSheet} from 'react-native';
import moment from 'moment';
import Entypo from 'react-native-vector-icons/Entypo';

import {HorizontalLine, Marginer, ProfilePicture} from '@components';
import {icons, images} from '@constants';
import {Typography, Sizes, Colors, styles} from '@styles';

const FollowCard = props => {
    const {follow, onPressProfile} = props;
    return (
        <View style={_styles.container}>
            {/* Profile Image */}
            <TouchableOpacity
                style={_styles.profileContainer}
                onPress={() =>
                    onPressProfile(follow.user_id)
                }>
                {/* ProfilePicture */}
                {/* Name */}
                {/* Hidden name */}
                {/* Descrition */}
                {/* Follow button unfollow or not */}
                </TouchableOpacity>
        </View>
    );
};

export default FollowCard;

const _styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: Colors.black,
        paddingTop: Sizes.padding,
    },

    profileContainer: {
        height: '100%',
        marginRight: Sizes.padding,
    },

    headerContainer: {
        flex: 1,
        height: '100%',
    },

    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerName: {
        ...styles.flexRowCenter,
    },

    contentContainer: {
        marginTop: 5,
    },
});
