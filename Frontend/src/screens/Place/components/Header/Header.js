import React, {useEffect} from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    LinearGradient,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles, Colors, Sizes} from '@styles';
import {data, icons} from '@constants';

const Header = () => {
    const nav = useNavigation();

    return (
        <View style={_styles.placeHeaderContainer}>
            <TouchableOpacity
                onPress={() => nav.goBack()}
                style={_styles.iconContainer}>
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
            <TouchableOpacity
                onPress={() => nav.goBack()}
                style={_styles.iconContainer}>
                <Image
                    source={icons.neon_heart_w}
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

export default Header;

const _styles = StyleSheet.create({
    placeHeaderContainer: {
        zIndex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        paddingHorizontal: Sizes.padding,
        backgroundColor: 'transparent',
        paddingTop: Sizes.padding * 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconContainer: {
        width: 35,
        height: 35,
        borderRadius: 25,
        backgroundColor: Colors.transparentBlack,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
