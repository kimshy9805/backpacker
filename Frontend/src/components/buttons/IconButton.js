import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {Colors, Sizes, Typography} from '@styles';

const IconButton = ({label, containerStyle, labelStyle, onPress}) => {
    return (
        <TouchableOpacity
            style={{
                height: 55,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: Sizes.radius * 2,
                backgroundColor: Colors.white,
                ...containerStyle,
            }}
            onPress={onPress}>
            <Text style={{...Typography.bold2, ...labelStyle}}>{label}</Text>
        </TouchableOpacity>
    );
};

export default IconButton;
