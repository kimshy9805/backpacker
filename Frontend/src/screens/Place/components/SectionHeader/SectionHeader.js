import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles, Colors, Sizes} from '@styles';
import {ProfilePicture} from '@components';
import {data, icons} from '@constants';

const SectionHeader = () => {
    const nav = useNavigation();
    return (
        <View
            style={[
                styles.sectionHeaderContainer,
                {
                    backgroundColor: 'transparent',
                    paddingTop: Sizes.padding * 3,
                    paddingLeft: Sizes.padding,
                },
            ]}>
            <TouchableOpacity
                onPress={() => nav.goBack()}
                style={{
                    width: 45,
                    height: 45,
                    borderRadius: 25,
                    backgroundColor: Colors.transparentBlack,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Image
                    source={icons.left_arrow}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: Colors.white,
                    }}
                />
            </TouchableOpacity>
        </View>
    );
};

export default SectionHeader;
