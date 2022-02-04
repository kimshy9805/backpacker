import React, {useRef, useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import {styles, Colors, Sizes, Typography} from '@styles';
import {ProfilePicture} from '@components';
import {data, icons, mapStyle} from '@constants';

const hotels = [
    {
        id: '1',
        name: 'Riverside Majestic Hotel',
        image: require('../../../../assets/images/malaysia/kuching/riverside_majestic_hotel.jpg'),
        rate: 5,
        price: 199,
        latlng: {
            latitude: 1.557907,
            longitude: 110.352079,
        },
    },
    {
        id: '2',
        name: 'Grand Margherita Hotel',
        image: require('../../../../assets/images/malaysia/kuching/grand_margherita_hotel.jpg'),
        rate: 5,
        price: 199,
        latlng: {
            latitude: 1.558163,
            longitude: 110.352813,
        },
    },
    {
        id: '3',
        name: 'Hilton Kuching',
        image: require('../../../../assets/images/malaysia/kuching/hilton_kuching.jpg'),
        rate: 5,
        price: 199,
        latlng: {
            latitude: 1.557144,
            longitude: 110.350496,
        },
    },
];

const Map = () => {
    const nav = useNavigation();
    let _panel = useRef(null);
    let _draggedValue = useRef(new Animated.Value(0)).current;

    const [selectedHotel, setSelectedHotel] = useState('');
    const [allowDragging, setAllowDragging] = useState(true);

    useEffect(() => {
        _draggedValue.addListener(valueObj => {
            if (valueObj.value > Sizes.height) {
                setAllowDragging(false);
            }
        });

        return () => {
            _draggedValue.removeAllListeners();
        };
    }, []);

    const onPressMarker = hotel => {
        setSelectedHotel(hotel);
    };

    return (
        <SlidingUpPanel
            ref={c => (_panel = c)}
            draggableRange={{
                top: Sizes.height + 120,
                bottom: 120,
            }}
            allowDragging={allowDragging}
            animatedValue={_draggedValue}
            showBackdrop={false}
            snappingPoints={[Sizes.height + 120]}
            height={Sizes.height + 120}
            friction={0.7}
            minimumDistanceThreshold={30}
            onBottomReached={() => {
                setAllowDragging(true);
            }}>
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                }}>
                {/* Panel Header */}
                <View
                    style={{
                        height: 120,
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Image
                        source={icons.up_arrow}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: Colors.white,
                        }}
                    />
                    <Text style={{...Typography.body5, color: Colors.white}}>
                        SWIPE FOR DETAIL
                    </Text>
                </View>
                {/* Panel Detail */}
                <View
                    style={{
                        flex: 1,
                        backgroundColor: Colors.white,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <MapView
                        style={{width: '100%', height: '100%'}}
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: 1.557177,
                            longitude: 110.351902,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.0144,
                        }}
                        customMapStyle={mapStyle}>
                        {hotels.map((hotel, index) => (
                            <Marker
                                key={index}
                                coordinate={hotel.latlng}
                                identifier={hotel.id}
                                onPress={() => onPressMarker(hotel)}>
                                <Image
                                    source={
                                        selectedHotel?.id === hotel.id
                                            ? icons.bed_on
                                            : icons.bed_off
                                    }
                                    resizeMode="contain"
                                    style={{width: 25, height: 25}}
                                />
                            </Marker>
                        ))}
                    </MapView>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 30,
                            left: 0,
                            right: 0,
                            padding: Sizes.radius,
                        }}>
                        <Text
                            style={{...Typography.bold1, color: Colors.white}}>
                            Hotels in!!
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: Sizes.radius,
                                padding: Sizes.radius,
                                borderRadius: 15,
                                backgroundColor: Colors.transparentBlack1,
                            }}>
                            <Image
                                source={selectedHotel?.image}
                                resizeMethod="cover"
                                style={{
                                    width: 90,
                                    height: 120,
                                    borderRadius: 15,
                                }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            top: Sizes.padding * 5,
                            borderWidth: 1,
                            width: '100%',
                        }}>
                        <View style={styles.flexRowCenterBetween}>
                            <TouchableOpacity onPress={() => nav.goBack()}>
                                <Image
                                    source={icons.side_drawer}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: Colors.white,
                                    }}
                                />
                            </TouchableOpacity>
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Text
                                    style={{
                                        ...Typography.bold3,
                                        color: Colors.white,
                                    }}>
                                    Singapore
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() =>
                                    nav.navigate('Profile', {userId: 1})
                                }>
                                <ProfilePicture
                                    size={35}
                                    image={data.users?.image}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* <SectionHeader /> */}
                </View>
            </View>
        </SlidingUpPanel>
    );
};

export default Map;
