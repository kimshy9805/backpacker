import React, {Component} from 'react';
import {View} from 'react-native';
import {Colors} from '@styles';

const HorizontalLine = props => {
    const {margin, color} = props;

    return (
        <View
            style={{
                height: 1,
                width: '100%',
                backgroundColor: color ? color : Colors.lightGray2,
                marginBottom: margin,
                marginTop: margin,
            }}
        />
    );
};

export default HorizontalLine;
