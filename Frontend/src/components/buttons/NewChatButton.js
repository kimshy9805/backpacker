import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {styles, Colors, Sizes} from '@styles';

const NewChatButton = ({onPress}) => {
    return (
        <TouchableOpacity style={_styles.container} onPress={onPress}>
            <MaterialIcons name={'message'} size={25} color={Colors.white} />
        </TouchableOpacity>
    );
};

export default NewChatButton;

const _styles = StyleSheet.create({
    container: {
        width: 45,
        height: 45,
        borderRadius: Sizes.radius * 3,
        position: 'absolute',
        bottom: 30,
        right: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
    },
});
