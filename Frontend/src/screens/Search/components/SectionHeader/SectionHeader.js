import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles, Colors, Typography} from '@styles';
import {ProfilePicture} from '@components';
import {data, icons, images} from '@constants';

const SectionHeader = () => {
    const nav = useNavigation();
    return (
        <View style={styles.sectionHeaderContainer}>
            <View style={styles.flexRowCenterBetween}>
                <TouchableOpacity
                    onPress={() =>
                        nav.navigate('Place', {placeImage: images.kuala})
                    }>
                    <Image
                        source={icons.side_drawer}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: Colors.white,
                        }}
                    />
                </TouchableOpacity>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text style={{...Typography.bold3, color: Colors.white}}>
                        Singapore
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => nav.navigate('Profile', {userId: 1})}>
                    <ProfilePicture size={35} image={data.users?.image} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SectionHeader;
