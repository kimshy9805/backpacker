import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {Colors, Sizes, Typography} from '@styles';

const TextButton = ({label, containerStyle, labelStyle, onPress}) => {
    return (
        <TouchableOpacity
            style={{
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: Sizes.radius * 2,
                backgroundColor: Colors.white,
                ...containerStyle,
            }}
            onPress={onPress}>
            <Text style={{...Typography.bold3, ...labelStyle}}>{label}</Text>
        </TouchableOpacity>
    );
};

export default TextButton;
