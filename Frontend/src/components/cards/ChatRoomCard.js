import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, View, Image, StyleSheet} from 'react-native';
import moment from 'moment';

import {HorizontalLine, TextButton, ProfilePicture} from '@components';
import {Typography, Sizes, Colors, styles} from '@styles';

const ChatRoomCard = props => {
    const {chatRoom, _onPressChatRoom} = props;

    return (
        <TouchableOpacity
            style={_styles.container}
            onPress={() => _onPressChatRoom(chatRoom)}>
            <View style={_styles.profileContainer}>
                <ProfilePicture
                    size={50}
                    image={chatRoom.users[0].details.profileImage}
                />
            </View>
            <View style={styles.container}>
                <View style={_styles.detailContainer}>
                    <View style={styles.flexRow}>
                        <Text style={_styles.name}>
                            {chatRoom.users[0].name}
                        </Text>
                    </View>
                    <Text style={_styles.time}>
                        {moment(chatRoom.last_message.created_at).fromNow()}
                    </Text>
                </View>
                <View style={{marginTop: 2}}>
                    <Text
                        style={{color: Colors.white}}
                        numberOfLines={2}
                        ellipsizeMode={'tail'}>
                        {chatRoom.last_message.content}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ChatRoomCard;

const _styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: Colors.black,
        paddingTop: Sizes.padding * 1.5,
    },

    profileContainer: {
        height: '100%',
        marginRight: Sizes.padding,
    },

    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    name: {
        ...Typography.bold3,
        color: Colors.white,
        lineHeight: 15,
        marginRight: 5,
    },

    email: {
        ...Typography.body4,
        color: 'grey',
        lineHeight: 15,
    },

    time: {
        ...Typography.body5,
        color: 'grey',
        lineHeight: 15,
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
