import React, {useRef, useState, useEffect} from 'react';
import {View, Image, Platform, Animated, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles, Colors, Typography, Sizes} from '@styles';
import {TextButton} from '@components';
import {data, icons, images} from '@constants';
import {Extrapolate} from 'react-native-reanimated';

const PLACES_SIZE = Sizes.width / 1.2;
const EMPTY_SIZE = (Sizes.width - PLACES_SIZE) / 2;

const Places = ({places, setPlaces}) => {
    const nav = useNavigation();
    const placeScrollX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        console.log(places);
    }, []);
    return (
        <View style={{flex: 1}}>
            <Animated.FlatList
                horizontal
                pagingEnabled
                snapToAlignment="center"
                snapToInterval={PLACES_SIZE + 28}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                contentContainerStyle={{alignItems: 'center'}}
                decelerationRate={0}
                bounces={false}
                data={places}
                keyExtractor={item => `${item.place_id}`}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {x: placeScrollX},
                            },
                        },
                    ],
                    {useNativeDriver: false},
                )}
                renderItem={({item, index}) => {
                    const opacity = placeScrollX.interpolate({
                        inputRange: [
                            (index - 2) * PLACES_SIZE,
                            (index - 1) * PLACES_SIZE,
                            index * PLACES_SIZE,
                        ],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp',
                    });

                    let activeHeight = 0;

                    if (Sizes.height > 800) {
                        activeHeight = Sizes.height / 1.8;
                    } else {
                        activeHeight = Sizes.height / 1.7;
                    }

                    const height = placeScrollX.interpolate({
                        inputRange: [
                            (index - 2) * PLACES_SIZE,
                            (index - 1) * PLACES_SIZE,
                            index * PLACES_SIZE,
                        ],
                        outputRange: [
                            Sizes.height / 2.25,
                            activeHeight,
                            Sizes.height / 2.25,
                        ],
                        extrapolate: 'clamp',
                    });

                    if (index === 0 || index == places.length - 1) {
                        return <View style={{width: EMPTY_SIZE}} />;
                    } else {
                        return (
                            <Animated.View
                                opacity={opacity}
                                style={{
                                    height: height,
                                    width: PLACES_SIZE,
                                    marginTop: Sizes.padding,
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    paddingHorizontal: 20,
                                    paddingBottom: 35,
                                    justifyContent: 'center',
                                }}>
                                <Image
                                    source={item.image}
                                    resizeMode="cover"
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 20,
                                    }}
                                />

                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                        marginHorizontal: Sizes.padding,
                                    }}>
                                    <Text
                                        style={{
                                            marginBottom: Sizes.radius,
                                            color: Colors.white,
                                            ...Typography.bold1,
                                        }}>
                                        {item.name}
                                    </Text>
                                    <Text
                                        style={{
                                            marginBottom: Sizes.padding * 3,
                                            color: Colors.white,
                                            ...Typography.bold4,
                                            textAlign: 'center',
                                        }}>
                                        {item.description}
                                    </Text>
                                    <TextButton
                                        label="Explore"
                                        containerStyle={{
                                            position: 'absolute',
                                            bottom: -35,
                                            width: 120,
                                        }}
                                    />
                                </View>
                            </Animated.View>
                        );
                    }
                }}
            />
        </View>
    );
};

export default Places;
