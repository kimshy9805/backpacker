import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {styles, Colors} from '@styles';

const Loader = props => {
    const {left = 0, right = 0, top = 0, bottom = 0} = props;
    return (
        <View
            style={[
                styles.flexColumnCenterCenter,
                {
                    flex: 1,
                    marginLeft: left,
                    marginRight: right,
                    marginTop: top,
                    marginBottom: bottom,
                },
            ]}>
            <ActivityIndicator size="large" color={Colors.primary} />
        </View>
    );
};

export default Loader;

