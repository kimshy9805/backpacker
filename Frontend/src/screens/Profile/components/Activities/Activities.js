import React, {
    useState,
    useRef,
    useEffect,
    createRef,
    useCallback,
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

import {styles, Colors, Sizes, Typography} from '@styles';
import {useSharedActivityTab} from '../../hooks';
import {MyTweets, MyTips, MyLikes, MyReplies} from './index';

const images = {
    Tweets: 'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    Tips: 'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    Likes: 'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    Replies:
        'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
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
    const {scrollX} = useSharedActivityTab();
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
    const {scrollX} = useSharedActivityTab();
    const inputRange = data.map((_, index) => index * Sizes.width + 30);
    const indicatorWidth = scrollX.interpolate({
        inputRange,
        outputRange: measures.map(measure => measure.width + 15),
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

const Activities = () => {
    const {ref, scrollX, type, setItemIndex} = useSharedActivityTab();

    const onItemPress = useCallback(itemIndex => {
        ref?.current?.scrollToOffset({
            offset: itemIndex * Sizes.width,
        });
        setItemIndex(itemIndex);
    });

    return (
        <View style={{flex: 1}}>
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
            {type === 'myTweets' && <MyTweets />}
            {type === 'myTips' && <MyTips />}
            {type === 'myLikes' && <MyLikes />}
            {type === 'myReplies' && <MyReplies />}
        </View>
    );
};

export default Activities;

const _styles = StyleSheet.create({
    container: {},
});

// {type === 'myTips' && <MyTips />}
// {type === 'myLikes' && <MyLikes />}
// {type === 'myReplies' && <MyReplies />}
