import React from 'react';
import {View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const TabBarIcon = props => {
    const {icon, color, size} = props;

    return <FontAwesomeIcon icon={icon} color={color} size={size} />;
};

export default TabBarIcon;
