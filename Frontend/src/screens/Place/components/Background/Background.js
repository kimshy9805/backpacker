import React, {useState, useEffect} from 'react';
import {View, ImageBackground, Animated, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../Header';
import {styles, Sizes, Colors} from '@styles';

const Background = ({place}) => {
    const nav = useNavigation();
    const scrollX = new Animated.Value(0);

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
            <View style={_styles.dotsContainer}>
                {place.details?.images.map((image, index) => {
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
                                _styles.dot,
                                {width: dotSize, height: dotSize},
                            ]}
                        />
                    );
                })}
            </View>
        );
    };

    return (
        <View style={_styles.backgroundContainer}>
            <Header />
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
                {place.details?.images.map((img, index) => {
                    return (
                        <View
                            key={index}
                            style={_styles.backgroundImageContainer}>
                            <ImageBackground
                                source={{uri: img}}
                                resizeMode="cover"
                                style={_styles.backgroundImage}>
                                <View style={_styles.backgroundFooter}>
                                    <LinearGradient
                                        colors={['transparent', '#000']}
                                        style={_styles.linearGradient}
                                        start={{x: 0, y: 0}}
                                        end={{x: 0, y: 1}}></LinearGradient>
                                </View>
                            </ImageBackground>
                        </View>
                    );
                })}
            </Animated.ScrollView>
            {renderDots()}
        </View>
    );
};

export default Background;

const _styles = StyleSheet.create({
    backgroundContainer: {
        width: '100%',
        height: Sizes.height < 700 ? Sizes.height * 0.4 : Sizes.height * 0.5,
        marginBottom: -90,
    },
    backgroundImageContainer: {
        width: Sizes.width,
        height: Sizes.height * 0.45,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    backgroundFooter: {
        borderWidth: 1,
        flex: 1,
        justifyContent: 'flex-end',
    },
    dot: {
        borderRadius: Sizes.radius,
        backgroundColor: Colors.primary,
        marginHorizontal: Sizes.radius / 2,
    },

    dotsContainer: {
        position: 'absolute',
        top: Sizes.height * 0.35,
        left: '46%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Sizes.padding / 2,
        marginBottom: Sizes.padding * 3,
        height: Sizes.padding,
    },
    linearGradient: {
        width: '100%',
        height: 300,
    },
});
