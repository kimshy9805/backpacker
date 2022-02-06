import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {styles, Colors, Typography, Sizes} from '@styles';
import {HorizontalLine} from '@components';
import {useSharedInput} from '../../Hooks';

const InputBox = () => {
    const {user} = useSelector(state => state.user);

    const {content, onChangeContent, resetContent} = useSharedInput();

    useEffect(() => {
        return () => {
            resetContent();
        };
    }, []);

    return (
        <View>
            <HorizontalLine />
            <View style={_styles.container}>
                <View style={_styles.inputBoxContainer}>
                    <TextInput
                        multiline
                        value={content}
                        style={_styles.input}
                        placeholder={'Type a message'}
                        placeholderTextColor={Colors.darkGray}
                        onChangeText={onChangeContent}
                    />
                    {!content && (
                        <Fontisto name="camera" size={20} color="grey" />
                    )}
                    <Entypo
                        name="attachment"
                        size={18}
                        color="grey"
                        style={{marginLeft: 10}}
                    />
                </View>
                <FontAwesome name="send" size={18} color={Colors.primary} />
            </View>
        </View>
    );
};

export default InputBox;

const _styles = StyleSheet.create({
    container: {
        margin: Sizes.padding,
        ...styles.flexRowCenter,
    },

    inputBoxContainer: {
        ...styles.flexRowCenter,
        flex: 1,
        marginLeft: 9,
        marginRight: 15,
        backgroundColor: Colors.input,
        borderRadius: Sizes.radius,
        height: 37,
        paddingHorizontal: Sizes.padding,
        ...styles.flexRowCenterBewteen,
    },

    input: {
        ...Typography.body4,
        lineHeight: 15,
        color: Colors.darkGray,
        width: 230,
        fontSize: 15,
        paddingRight: 5,
    },
});
