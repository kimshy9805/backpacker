import React, {
    useState,
    useEffect,
    createRef,
    useCallback,
    useRef,
} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    FlatList,
    Animated,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';

import {
    Marginer,
    TweetCard,
    Loader,
    HorizontalLine,
    FollowCard,
} from '@components';
import {styles, Sizes, Colors, Typography} from '@styles';
import {likeTweet, unlikeTweet, fetchTweets} from '@ducks/tweet';
import {useSharedFollowTab} from '../hooks';

const images = {
    Followers: '',
    Following: '',
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
    const {scrollX} = useSharedFollowTab();
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
    const {scrollX} = useSharedFollowTab();
    const inputRange = data.map((_, index) => index * Sizes.width + 30);
    const indicatorWidth = scrollX.interpolate({
        inputRange,
        outputRange: measures.map(measure => measure.width + 30),
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

const Follow = ({tweet}) => {
    const nav = useNavigation();

    const dispatch = useDispatch();

    const {ref, scrollX, type, setItemIndex} = useSharedFollowTab();

    const onItemPress = useCallback(itemIndex => {
        ref?.current?.scrollToOffset({
            offset: itemIndex * Sizes.width,
        });
        setItemIndex(itemIndex);
    });

    return (
        <View style={_styles.container}>
            <View style={_styles.tabContainer}>
                <Tabs data={data} onItemPress={onItemPress} />
            </View>
            <View style={_styles.line} />
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
                    return <FollowCard follow={item} />;
                }}
            />
        </View>
    );
};

export default Follow;

const _styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabContainer: {
        paddingHorizontal: Sizes.padding,
        paddingTop: Sizes.padding,
    },
    line: {
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
    },
});
