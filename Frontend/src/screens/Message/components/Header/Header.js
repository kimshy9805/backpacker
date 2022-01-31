import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
            <TouchableOpacity
                onPress={() => nav.navigate('Profile', {userId: 1})}>
                <ProfilePicture size={30} image={data.users?.image} />
            </TouchableOpacity>
            <Text style={{...Typography.bold3, color: Colors.white}}>
                Message
            </Text>
            <TouchableOpacity onPress={() => nav.navigate('Dashboard')}>
                <AntDesign name={'setting'} size={25} color={Colors.primary} />
            </TouchableOpacity>
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
