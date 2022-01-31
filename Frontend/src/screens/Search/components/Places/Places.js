import React, {useRef, useState, useEffect} from 'react';
import {
    View,
    Image,
    Platform,
    StyleSheet,
    Text,
    FlatList,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles, Colors, Typography, Sizes} from '@styles';
import {TextButton, Marginer} from '@components';
import {data, icons, images} from '@constants';

const Places = ({places, setPlaces}) => {
    const nav = useNavigation();

    const _onPressPlace = place_id => {
        nav.navigate('Place', {place_id: place_id});
    };

    const _renderItem = (item, index) => {
        return (
            <TouchableOpacity
                style={{
                    marginLeft: index === 0 ? 0 : 20,
                    marginRight: index === places.length - 1 ? 30 : 0,
                }}
                onPress={() => _onPressPlace(item.item.place_id)}>
                <ImageBackground
                    source={{uri: item.item.details?.images[0]}}
                    style={{
                        width: Sizes.width / 2,
                        height: Sizes.height / 4,
                        justifyContent: 'space-between',
                    }}
                    resizeMode="cover"
                    borderRadius={Sizes.radius * 2}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            marginLeft: 20,
                            marginBottom: 25,
                        }}>
                        <Text style={[_styles.whiteText5, {opacity: 0.5}]}>
                            {item.item.type}
                        </Text>
                        <Text style={_styles.name}>{item.item.name}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        );
    };

    return (
        <View style={_styles.container}>
            {/* 추천 */}
            <Text style={_styles.whiteText5}>Recommended</Text>
            <FlatList
                horizontal
                contentContainerStyle={{marginVertical: Sizes.padding}}
                keyExtractor={item => item.place_id}
                data={places}
                renderItem={_renderItem}
            />
            <Marginer margin={5} />
            {/* 근처 */}
            <Text style={_styles.whiteText5}>NearBy</Text>
            <FlatList
                horizontal
                contentContainerStyle={{marginVertical: Sizes.padding}}
                keyExtractor={item => item.place_id}
                data={places}
                renderItem={_renderItem}
            />
        </View>
    );
};

export default Places;

const _styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: Sizes.padding * 0.5,
        paddingVertical: Sizes.padding,
    },
    whiteText5: {
        color: Colors.white,
        ...Typography.bold4,
    },

    name: {
        color: Colors.white,
        ...Typography.bold3,
    },
});
