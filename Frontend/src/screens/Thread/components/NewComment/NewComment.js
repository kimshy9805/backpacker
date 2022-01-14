import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

import {styles, Colors, Typography, Sizes} from '@styles';
import {data} from '@constants';

const NewComment = () => {
    const onPressOptions = () => {
        console.log('options!');
    };

    return (
        <View style={_styles.container}>
            <TextInput
                style={_styles.inputContainer}
                placeholder={'답글 트윗하기'}
                placeholderTextColor={Colors.darkGray}
            />
        </View>
    );
};

export default NewComment;

const _styles = StyleSheet.create({
    container: {
        height: 60,
        borderTopColor: Colors.lightGray2,
        borderTopWidth: 0.25,
        paddingHorizontal: Sizes.padding,
        paddingVertical: Sizes.padding / 2,
    },

    inputContainer: {
        height: 30,
        backgroundColor: Colors.lightGray3,
        borderRadius: Sizes.radius * 2,
        paddingHorizontal: Sizes.padding,
        color: Colors.white,
        width: '100%',
    },

    text: {},
});
