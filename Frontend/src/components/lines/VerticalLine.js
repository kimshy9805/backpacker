import React, {Component} from 'react';
import {View} from 'react-native';
import {Colors} from '@styles';

const VerticalLine = props => {
    const {margin, color = Colors.lightGray2} = props;

    return (
        <View
            style={{
                height: '100%',
                width: 0.25,
                backgroundColor: color,
                marginVertical: margin,
            }}
        />
    );
};

export default VerticalLine;
