import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {styles} from '@styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const SectionHeader = () => {
    const nav = useNavigation();
    return (
        <View style={styles.flexRowCenterBetween}>
            <TouchableOpacity onPress={() => nav.navigate('Auth')}>
                <Text>Skip</Text>
            </TouchableOpacity>
            <FontAwesomeIcon icon={'home'} color={Colors.primary} size={30} />
            <TouchableOpacity onPress={() => nav.navigate('Dashboard')}>
                <Text>Dashboard</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SectionHeader;
