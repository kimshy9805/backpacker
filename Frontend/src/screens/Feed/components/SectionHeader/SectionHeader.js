import React from 'react';
import {View, Animated, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles, Colors, Sizes} from '@styles';
import {ProfilePicture} from '@components';
import {data} from '@constants';

const H_MAX_HEIGHT = 150;
const H_MIN_HEIGHT = 52;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

const SectionHeader = ({translateY}) => {
    const nav = useNavigation();
    return (
        <Animated.View
            style={[
                {
                    transform: [{translateY: translateY}],
                    position: 'absolute',
                    backgroundColor: '#1c1c1c',
                    left: 0,
                    right: 0,
                    top: 45,
                    width: '100%',
                    zIndex: 1,
                    paddingHorizontal: Sizes.padding,
                    paddingVertical: Sizes.padding,
                    height: 58,
                    backgroundColor: Colors.transparentBlack1,
                    zIndex: 1,
                },
                styles.flexRowCenterBetween,
            ]}>
            <TouchableOpacity
                onPress={() => nav.navigate('Profile', {userId: 1})}>
                <ProfilePicture size={30} image={data.users?.image} />
            </TouchableOpacity>
            <FontAwesomeIcon icon={'home'} color={Colors.primary} size={30} />
            <TouchableOpacity onPress={() => nav.navigate('Dashboard')}>
                <MaterialCommunityIcons
                    name={'star-four-points-outline'}
                    size={30}
                    color={Colors.primary}
                />
            </TouchableOpacity>
        </Animated.View>
    );
};

export default SectionHeader;
