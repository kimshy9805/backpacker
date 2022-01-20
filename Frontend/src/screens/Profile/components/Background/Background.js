import React from 'react';
import {
    View,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {styles, Colors, Sizes} from '@styles';
import {ProfilePicture} from '@components';
import {icons} from '@constants';

const Background = () => {
    const nav = useNavigation();
    return (
        <View>
            <ImageBackground
                style={_styles.backgroundContainer}
                source={{uri: 'https://picsum.photos/200'}}>
                {/* Header */}
                <View style={_styles.headerConatiner}>
                    <View style={styles.flexRowCenterBetween}>
                        <TouchableOpacity
                            onPress={() => nav.goBack()}
                            style={_styles.leftIcon}>
                            <AntDesign
                                name={'arrowleft'}
                                size={19}
                                color={Colors.white}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => console.log('search')}
                            style={_styles.rightIcon}>
                            <AntDesign
                                name={'search1'}
                                size={19}
                                color={Colors.white}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Background;

const _styles = StyleSheet.create({
    backgroundContainer: {
        width: '100%',
        height: 175,
    },

    headerConatiner: {
        paddingHorizontal: Sizes.padding,
        paddingVertical: Sizes.padding,
        top: 50,
    },
    leftIcon: {
        width: 35,
        height: 35,
        borderRadius: Sizes.radius * 2,
        borderColor: Colors.white,
        backgroundColor: Colors.lightGray3,
        ...styles.flexRowCenterCenter,
    },

    rightIcon: {
        width: 35,
        height: 35,
        borderRadius: Sizes.radius * 2,
        borderColor: Colors.white,
        backgroundColor: Colors.lightGray3,
        ...styles.flexRowCenterCenter,
    },
});
