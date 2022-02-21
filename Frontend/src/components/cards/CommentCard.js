import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, View, Image, StyleSheet} from 'react-native';
import moment from 'moment';
import Entypo from 'react-native-vector-icons/Entypo';

import {HorizontalLine, Marginer, ProfilePicture} from '@components';
import {icons, images} from '@constants';
import {Typography, Sizes, Colors, styles} from '@styles';

const CommentCard = props => {
    const {comment, onPressProfile} = props;
    return (
        <View style={_styles.container}>
            {/* Profile Image */}
            <TouchableOpacity
                style={_styles.profileContainer}
                onPress={() => onPressProfile(comment.user_id)}>
                <ProfilePicture
                    size={40}
                    image={comment.user.details?.images[0]}
                />
            </TouchableOpacity>
            {/* Tweet Detail */}
            <View style={_styles.headerContainer}>
                <View style={_styles.header}>
                    <View style={_styles.headerName}>
                        <Text
                            style={{
                                marginRight: 5,
                                ...Typography.bold5,
                                color: Colors.white,
                            }}>
                            {comment.user.alias}
                        </Text>
                        <Text
                            style={{
                                marginRight: 5,
                                ...Typography.body5,
                                color: Colors.white,
                            }}>
                            {moment(comment.updated_at).fromNow()}
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Entypo
                            name="dots-three-horizontal"
                            size={15}
                            color={Colors.darkGray}
                        />
                    </TouchableOpacity>
                </View>
                {/* Content */}
                <View style={_styles.contentContainer}>
                    <Text style={{...Typography.body2, color: Colors.white}}>
                        {comment.content}
                    </Text>
                    {comment.details?.images && (
                        <Image
                            source={{uri: 'https://picsum.photos/200'}}
                            style={{
                                marginVertical: 10,
                                width: '100%',
                                height: 150,
                                borderRadius: Sizes.radius,
                            }}
                            resizeMode="cover"
                        />
                    )}
                </View>
            </View>
        </View>
    );
};

export default CommentCard;

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
