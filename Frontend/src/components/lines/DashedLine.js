import React, {useState} from 'react';
import {View} from 'react-native';
import {Colors} from '@styles';
import DashLine from 'react-native-dashed-line';

const DashedLine = props => {
    return (
        <View style={{height: 1}}>
            <DashLine
                dashLength={5}
                dashGap={4}
                dashColor={Colors.lightGray2}
            />
        </View>
    );
};

export default DashedLine;
