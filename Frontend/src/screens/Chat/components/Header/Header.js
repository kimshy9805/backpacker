import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import {styles, Colors, Typography, Sizes} from '@styles';
import {ProfilePicture} from '@components';
import {data} from '@constants';

const Header = () => {
    const nav = useNavigation();

    const {user} = useSelector(state => state.user);
    const _onPressGoback = () => {
        nav.goBack();
    };

    const _onPressWarning = () => {
        nav.navigate('Report');
    };

    return (
        <View style={_styles.container}>
            <TouchableOpacity onPress={_onPressGoback}>
                <Feather name="arrow-left" size={30} color={Colors.primary} />
            </TouchableOpacity>
            <Text style={{...Typography.bold3, color: Colors.white}}>Chat</Text>
            <TouchableOpacity onPress={_onPressWarning}>
                <Entypo
                    name={'info-with-circle'}
                    size={25}
                    color={Colors.primary}
                />
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
