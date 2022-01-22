import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';

import {styles, Colors, Typography, Sizes} from '@styles';
import {ProfilePicture} from '@components';
import {data} from '@constants';

const Header = () => {
    const nav = useNavigation();

    const {user} = useSelector(state => state.user);
    const onClose = () => {
        nav.goBack();
    };

    return (
        <View style={_styles.container}>
            <TouchableOpacity onPress={onClose}>
                <Feather name="arrow-left" size={30} color={Colors.primary} />
            </TouchableOpacity>
            <Text style={{...Typography.bold3, color: Colors.white}}>
                Notification
            </Text>
            <View style={{width: 30, height: 30}} />
        </View>
    );
};

export default Header;

const _styles = StyleSheet.create({
    container: {
        padding: Sizes.padding,
        backgroundColor: Colors.black,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
    },
});
