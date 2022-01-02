import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from '@styles';

const SectionHeader = () => {
    const nav = useNavigation();
    return (
        <View style={styles.flexRowCenterBetween}>
            <View />
            <TouchableOpacity onPress={() => nav.navigate('Auth')}>
                <Text>Skip</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SectionHeader;
