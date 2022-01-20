import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {styles, Colors, Sizes, Typography} from '@styles';
import {ProfilePicture, TextButton, Marginer} from '@components';
import {icons} from '@constants';

const Details = () => {
    const nav = useNavigation();

    const [followers, setFollowers] = useState(4);

    return (
        <View style={_styles.container}>
            {/* Edit Profile */}
            <View style={{alignSelf: 'flex-end'}}>
                <TextButton
                    label={'Edit profile'}
                    containerStyle={_styles.editButtonContainer}
                    labelStyle={_styles.editButton}
                />
            </View>
            {/* Profile */}
            <TouchableOpacity style={_styles.profilePictureContainer}>
                <ProfilePicture size={75} image={'https://picsum.photos/200'} />
            </TouchableOpacity>
            {/* Name */}
            <Text style={_styles.name}>김석현</Text>
            <Marginer margin={3} />
            {/* NickName */}
            <Text style={_styles.detailText}>@gimseong74319304</Text>
            <Marginer margin={3} />
            {/* CreatedAt */}
            <Text style={_styles.detailText}>2021년 12월에 가입함</Text>
            <Marginer margin={3} />
            {/* Followers and ~ */}
            <View style={[styles.flexRowCenter]}>
                <TouchableOpacity style={styles.flexRowCenter}>
                    <Text style={_styles.number}>4</Text>
                    <Text style={_styles.detailText}>Following</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.flexRowCenter}>
                    <Text style={_styles.number}>4</Text>
                    <Text style={_styles.detailText}>Followers</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Details;

const _styles = StyleSheet.create({
    container: {
        padding: Sizes.padding,
    },

    profilePictureContainer: {
        position: 'absolute',
        top: -30,
        left: Sizes.padding - 5,
        borderRadius: Sizes.radius * 5,
        borderWidth: 3,
        borderColor: Colors.black,
    },
    editButtonContainer: {
        width: 115,
        height: 35,
        borderRadius: Sizes.radius * 2,
        borderWidth: 0.5,
        borderColor: 'grey',
        backgroundColor: 'transparent',
    },
    editButton: {
        color: Colors.white,
        ...Typography.bold4,
    },

    name: {
        ...Typography.bold2,
        color: Colors.white,
    },
    detailText: {
        ...Typography.body4,
        color: 'grey',
        marginRight: 10,
    },
    number: {
        ...Typography.bold4,
        color: Colors.white,
        marginRight: 5,
    },
});
