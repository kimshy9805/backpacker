import React, {useEffect} from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    Animated,
    StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles, Colors, Sizes} from '@styles';
import {ProfilePicture} from '@components';
import {data, icons} from '@constants';

const SectionHeader = () => {
    const nav = useNavigation();

    return (
        <View style={styles.placeSectionHeaderContainer}>
            <TouchableOpacity
                onPress={() => nav.goBack()}
                style={{
                    width: 35,
                    height: 35,
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
