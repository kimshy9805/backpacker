import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles, Colors} from '@styles';
import {ProfilePicture} from '@components';
import {data} from '@constants';

const SectionHeader = () => {
    const nav = useNavigation();
    return (
        <View style={styles.sectionHeaderContainer}>
            <View style={styles.flexRowCenterBetween}>
                <TouchableOpacity
                    onPress={() => nav.navigate('Profile', {userId: 1})}>
                    <ProfilePicture size={40} image={data.users?.image} />
                </TouchableOpacity>
                <FontAwesomeIcon
                    icon={'home'}
                    color={Colors.primary}
                    size={30}
                />
                <TouchableOpacity onPress={() => nav.navigate('Dashboard')}>
                    <MaterialCommunityIcons
                        name={'star-four-points-outline'}
                        size={30}
                        color={Colors.primary}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SectionHeader;
