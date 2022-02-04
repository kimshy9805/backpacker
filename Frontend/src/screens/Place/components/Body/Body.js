import React, {
    useState,
    createRef,
    useCallback,
    useRef,
    useEffect,
} from 'react';
import {
    View,
    Image,
    StyleSheet,
    FlatList,
    Animated,
    Text,
    findNodeHandle,
    TouchableOpacity,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';

import {Description, Tips, Tweets} from '../index';
import {styles, Colors, Sizes, Typography} from '@styles';
import {useSharedPlaceTab} from '../../hooks';

const images = {
    About: 'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    Tips: 'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    Tweets: 'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    Chats: 'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
};
const data = Object.keys(images).map(i => ({
    key: i,
    title: i,
    ref: createRef(),
}));

const Tab = React.forwardRef(({item, onItemPress}, ref) => {
    return (
        <TouchableOpacity onPress={onItemPress} style={{marginBottom: 8}}>
            <View ref={ref}>
                <Text style={{color: Colors.white, ...Typography.bold4}}>
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
});

const Tabs = ({data, onItemPress}) => {
    const {scrollX} = useSharedPlaceTab();
    const [measures, setMeasures] = useState([]);
    const containerRef = useRef();

    useEffect(() => {
        let m = [];
        data.forEach(item => {
            item.ref.current.measureLayout(
                containerRef.current,
                (x, y, width, height) => {
                    m.push({x, y, width, height});
                    if (m.length === data.length) setMeasures(m);
                },
            );
        });
    }, []);

    return (
        <View
            style={{
                width: '100%',
                paddingHorizontal: Sizes.padding * 1.5,
            }}>
            <View style={styles.flexRowCenterBetween} ref={containerRef}>
                {data.map((item, index) => {
                    return (
                        <Tab
                            key={item.key}
                            item={item}
                            ref={item.ref}
                            onItemPress={() => onItemPress(index)}
                        />
                    );
                })}
            </View>
            {measures.length > 0 && (
                <Indicator measures={measures} scrollX={scrollX} />
            )}
        </View>
    );
};

const Indicator = ({measures}) => {
    const {scrollX} = useSharedPlaceTab();
    const inputRange = data.map((_, index) => index * Sizes.width + 30);
    const indicatorWidth = scrollX.interpolate({
        inputRange,
        outputRange: measures.map(measure => measure.width + 20),
    });
    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: measures.map(measure => measure.x),
    });
    return (
        <Animated.View
            style={{
                height: 3,
                width: indicatorWidth,
                left: 0,
                transform: [{translateX}],
                backgroundColor: Colors.primary,
            }}
        />
    );
};

const Body = ({place}) => {
    const {ref, scrollX, type, setItemIndex} = useSharedPlaceTab();

    const onItemPress = useCallback(itemIndex => {
        ref?.current?.scrollToOffset({
            offset: itemIndex * Sizes.width,
        });
        setItemIndex(itemIndex);
    });

    return (
        <View style={_styles.bodyContainer}>
            <Tabs data={data} onItemPress={onItemPress} />
            <Animated.FlatList
                ref={ref}
                data={data}
                keyExtractor={item => item.key}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: false},
                )}
                renderItem={({item, index}) => {
                    return (
                        <View
                            style={{
                                width: Sizes.width,
                            }}></View>
                    );
                }}
            />
            {type === 'about' && <Description place={place} />}
            {type === 'tips' && <Tips />}
            {type === 'tweets' && <Tweets />}
        </View>
    );
};

export default Body;

const _styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        backgroundColor: Colors.black,
        borderTopLeftRadius: Sizes.radius * 3,
        borderTopRightRadius: Sizes.radius * 3,
        borderWidth: 1,
        paddingTop: Sizes.padding,
    },
    buttonContainer: {
        width: '30%',
        height: 32,
        borderRadius: 10,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },

    tabText: {
        color: Colors.black,
        ...Typography.bold4,
        letterSpacing: 0.5,
    },
    participants: {},
});
