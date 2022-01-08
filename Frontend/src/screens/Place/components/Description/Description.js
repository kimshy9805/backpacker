import React, {useState, useRef} from 'react';
import {View, ScrollView, Text, ImageBackground} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';

import {SectionHeader, Map} from './components';
import {styles} from '@styles';
import {images} from '@constants';
import {HorizontalLine} from '@components';
import {resetGetUser} from '@ducks/user';

const Description = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    return (
        <View style={styles.placeDescriptionContainer}>
            {/* Name */}

            {/* Description */}
            <Text>Descirption</Text>
        </View>
    );
};

export default Description;
