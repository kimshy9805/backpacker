import React, {Component} from 'react';
import {View} from 'react-native';
import {Colors} from '@styles';

const HorizontalLine = props => {
    const {margin, color = Colors.lightGray2} = props;

    return (
        <View
            style={{
                height: 1,
                width: '100%',
                backgroundColor: color,
                marginBottom: margin,
                marginTop: margin,
            }}
        />
    );
};

export default HorizontalLine;
