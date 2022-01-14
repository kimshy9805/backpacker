import React, {Component} from 'react';
import {View} from 'react-native';
import {Colors} from '@styles';

const HorizontalLine = props => {
    const {margin, color = Colors.lightGray2} = props;

    return (
        <View
            style={{
                height: 0.25,
                width: '100%',
                backgroundColor: color,
                marginVertical: margin,
            }}
        />
    );
};

export default HorizontalLine;
