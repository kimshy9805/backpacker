import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {styles, Colors, Sizes} from '@styles';

const Header = props => {
    const {left = 0, right = 0, top = 0, bottom = 0} = props;
    return (
        <View
            style={{
                paddingHorizontal: Sizes.padding,
                paddingVertical: Sizes.padding,
                backgroundColor: Colors.black,
            }}>
            <ActivityIndicator size="large" color={Colors.primary} />
        </View>
    );
};

export default Header;
