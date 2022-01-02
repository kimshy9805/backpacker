import React from 'react';
import {View} from 'react-native';

const Marginer = props => {
    const {margin} = props;
    return <View style={{marginVertical: margin}} />;
};

export default Marginer;
