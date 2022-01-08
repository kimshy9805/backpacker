import React, {useState, useEffect} from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    Animated,
    StyleSheet,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';

import {data, icons} from '@constants';
import {SectionHeader, Map} from './components';
import {styles, Sizes, Colors} from '@styles';
import {HorizontalLine} from '@components';
import {resetGetUser} from '@ducks/user';

const Background = () => {
    const nav = useNavigation();
    const scrollX = new Animated.Value(0);

    const place = data.places[0];

    useEffect(() => {
        scrollX.addListener(({value}) => {
            if (
                Math.floor(value / Sizes.width) ===
                place.details.images.length - 1
            ) {
            }
        });

        return () => scrollX.removeListener();
    }, []);

    const renderDots = () => {
        const dotPosition = Animated.divide(scrollX, Sizes.width);

        return (
            <View style={styles.placeDotsContainer}>
                {place.details.images.map((image, index) => {
                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp',
                    });

                    const dotSize = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [Sizes.base, Sizes.base, Sizes.base],
                        extrapolate: 'clamp',
                    });

                    return (
                        <Animated.View
                            key={`dot-${index}`}
                            opacity={opacity}
                            style={[
                                styles.placeDot,
                                {width: dotSize, height: dotSize},
                            ]}
                        />
                    );
                })}
            </View>
        );
    };

    return (
        <View style={styles.placeBackgroundContainer}>
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEnabled
                scrollEventThrottle={16}
                snapToAlignment="center"
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: false},
                )}
                showsHorizontalScrollIndicator={false}>
                {place.details.images.map((img, index) => {
                    return (
                        <View
                            key={index}
                            style={styles.placeBackgroundImageContainer}>
                            <ImageBackground
                                source={{uri: img}}
                                resizeMode="cover"
                                style={styles.placeBackgroundImage}
                            />
                        </View>
                    );
                })}
            </Animated.ScrollView>
            {renderDots()}
        </View>
    );
};

export default Background;
