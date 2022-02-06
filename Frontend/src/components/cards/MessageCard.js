import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, View, Image, StyleSheet} from 'react-native';
import moment from 'moment';
import {useSelector} from 'react-redux';

import {HorizontalLine, TextButton, ProfilePicture} from '@components';
import {Typography, Sizes, Colors, styles} from '@styles';

const MessageCard = ({message}) => {
    const {user} = useSelector(state => state.user);
    const [isMyMsg, setIsMyMsg] = useState(false);

    useEffect(() => {
        if (message.user.user_id === user.user_id) {
            setIsMyMsg(true);
        }
    }, []);

    return (
        <View
            style={[
                _styles.container,
                {alignItems: isMyMsg === true ? 'flex-end' : 'flex-start'},
            ]}>
            <View style={_styles.messageContainer}>
                <View style={_styles.contentContainer}>
                    <Text style={_styles.content}>{message.content}</Text>
                </View>
                <Text style={_styles.time}>
                    {moment(message.created_at).fromNow()}
                </Text>
            </View>
        </View>
    );
};

export default MessageCard;

const _styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black,
        paddingTop: Sizes.padding,
        paddingHorizontal: Sizes.padding,
    },

    messageContainer: {
        width: '65%',
    },

    contentContainer: {
        backgroundColor: Colors.primary,
        borderRadius: Sizes.radius,
        padding: Sizes.padding * 0.5,
    },

    content: {
        ...Typography.body5,
        color: Colors.white,
    },

    time: {
        marginTop: 3,
        ...Typography.body6,
        color: 'grey',
        alignSelf: 'flex-end',
    },
});
