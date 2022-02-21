import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

import {styles, Colors, Typography, Sizes} from '@styles';
import {ProfilePicture} from '@components';

const Profile = ({tweet}) => {
    const nav = useNavigation();

    const onClose = () => {
        nav.goBack();
    };

    const onPressOptions = () => {
        console.log('options!');
    };

    return (
        <View style={styles.threadProfileContainer}>
            <View style={styles.flexRowCenter}>
                <ProfilePicture size={55} image={tweet.user.profile_image} />
                <View style={{marginLeft: 20}}>
                    <Text style={{...Typography.bold3, color: Colors.white}}>
                        {tweet.user.alias}
                    </Text>
                    <Text
                        style={{...Typography.bold6, color: Colors.lightGray}}>
                        {tweet.user.alias}
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={onPressOptions}
                style={{marginTop: Sizes.padding / 2}}>
                <Entypo
                    name="dots-three-horizontal"
                    size={15}
                    color={Colors.lightGray}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Profile;
