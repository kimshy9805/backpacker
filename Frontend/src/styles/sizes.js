import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Sizes = {
    // Spacing
    base: 8,
    font: 14,
    radius: 10,
    padding: 16,

    // Font Sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,
    body6: 10,
    body7: 8,

    // App Dimensions
    width,
    height,
};

export default Sizes;
