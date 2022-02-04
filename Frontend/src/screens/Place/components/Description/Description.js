import React, {useState, useRef} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';

import {styles, Colors, Sizes, Typography} from '@styles';
import {Marginer} from '@components';

const Description = ({place}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    return (
        <View style={[styles.container, {paddingHorizontal: Sizes.padding}]}>
            <Marginer margin={10} />
            <Text style={{color: Colors.white, ...Typography.bold2}}>
                {place.name}
            </Text>
            <Marginer margin={5} />
            <Text style={{color: Colors.white, ...Typography.body4}}>
                {place.description}
            </Text>
            {/* <Map />  */}
            <Marginer margin={10} />
            <Text style={{color: Colors.white, ...Typography.bold3}}>
                LOCATION
            </Text>
            <Marginer margin={5} />
        </View>
    );
};

export default Description;

const _styles = StyleSheet.create({
    buttonContainer: {
        width: '30%',
        height: 32,
        borderRadius: 10,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },

    about: {
        color: Colors.black,
        ...Typography.bold4,
        letterSpacing: 0.5,
    },
    participants: {},
});
