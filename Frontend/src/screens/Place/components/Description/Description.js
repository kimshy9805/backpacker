import React, {useState, useRef} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';

import {SectionHeader, Map} from './components';
import {styles, Colors, Sizes, Typography} from '@styles';
import {images} from '@constants';
import {Marginer} from '@components';
import {resetGetUser} from '@ducks/user';

const Description = ({place}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <View style={styles.flexRow}>
                <TouchableOpacity
                    style={[_styles.buttonContainer, {marginRight: 10}]}>
                    <Text style={_styles.about}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        _styles.buttonContainer,
                        {width: 124, backgroundColor: Colors.input},
                    ]}>
                    <Text style={_styles.about}>Participants</Text>
                </TouchableOpacity>
            </View>
            <Marginer margin={15} />
            <Text style={{color: Colors.white, ...Typography.bold5}}>
                {place.description}
            </Text>
        </View>
    );
};

export default Description;

const _styles = StyleSheet.create({
    buttonContainer: {
        width: 76,
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
