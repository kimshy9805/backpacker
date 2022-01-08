import React, {useRef, useState} from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    ScrollView,
    Platform,
    Animated,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles, Colors, Typography, Sizes} from '@styles';
import {ProfilePicture} from '@components';
import {data, icons, images} from '@constants';
import {Extrapolate} from 'react-native-reanimated';
import {date} from 'yup';

const COUNTRIES_ITEM_SIZES = Sizes.width / 3;
const Countries = ({places, setPlaces}) => {
    const nav = useNavigation();
    const countryScrollX = useRef(new Animated.Value(0)).current;
    const [countries, setCountries] = useState([
        {country_id: -1},
        ...data.countries,
        {country_id: -2},
    ]);
    return (
        <View>
            <Animated.FlatList
                horizontal
                pagingEnabled
                snapToAlignment="center"
                snapToInterval={COUNTRIES_ITEM_SIZES}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                decelerationRate={0}
                data={countries}
                keyExtractor={item => `${item.country_id}`}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {x: countryScrollX},
                            },
                        },
                    ],
                    {useNativeDriver: false},
                )}
                onMomentumScrollEnd={event => {
                    let position =
                        event.nativeEvent.contentOffset.x /
                        COUNTRIES_ITEM_SIZES.toFixed(0);
                    console.log(position);
                    setPlaces([
                        {place_id: -1},
                        ...data.countries[position].places,
                        {place_id: -2},
                    ]);
                }}
                renderItem={({item, index}) => {
                    const opacity = countryScrollX.interpolate({
                        inputRange: [
                            (index - 2) * COUNTRIES_ITEM_SIZES,
                            (index - 1) * COUNTRIES_ITEM_SIZES,
                            index * COUNTRIES_ITEM_SIZES,
                        ],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp',
                    });

                    const mapSize = countryScrollX.interpolate({
                        inputRange: [
                            (index - 2) * COUNTRIES_ITEM_SIZES,
                            (index - 1) * COUNTRIES_ITEM_SIZES,
                            index * COUNTRIES_ITEM_SIZES,
                        ],
                        outputRange: [25, Platform.OS === 'ios' ? 80 : 60, 25],
                        extrapolate: 'clamp',
                    });

                    const fontSize = countryScrollX.interpolate({
                        inputRange: [
                            (index - 2) * COUNTRIES_ITEM_SIZES,
                            (index - 1) * COUNTRIES_ITEM_SIZES,
                            index * COUNTRIES_ITEM_SIZES,
                        ],
                        outputRange: [15, 25, 15],
                        extrapolate: 'clamp',
                    });

                    if (index === 0 || index == countries.length - 1) {
                        return <View style={{width: COUNTRIES_ITEM_SIZES}} />;
                    } else {
                        return (
                            <Animated.View
                                opacity={opacity}
                                style={{
                                    height: 130,
                                    width: COUNTRIES_ITEM_SIZES,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Animated.Image
                                    source={item.image}
                                    resizeMode="contain"
                                    style={{
                                        width: mapSize,
                                        height: mapSize,
                                        tintColor: Colors.white,
                                    }}
                                />
                                <Animated.Text
                                    style={{
                                        marginTop: Sizes.padding / 2,
                                        color: Colors.white,
                                        ...Typography.bold1,
                                        fontSize: fontSize,
                                    }}>
                                    {item.name}
                                </Animated.Text>
                            </Animated.View>
                        );
                    }
                }}
            />
        </View>
    );
};

export default Countries;
