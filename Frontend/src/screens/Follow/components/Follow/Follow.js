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

import {styles, Sizes, Colors, Typography} from '@styles';
import {useSharedFollowTab} from '../hooks';
import MyFollowers from './MyFollowers';
import MyFollowings from './MyFollowings';

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
                    console.log(x, y, width);
                    if (m.length === data.length) setMeasures(m);
                },
            );
        });
    }, []);

    return (
        <View style={[_styles.tabsContainer, {width: '100%'}]}>
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
            {measures.length > 0 && <Indicator measures={measures} />}
        </View>
    );
};

const Indicator = ({measures}) => {
    const {scrollX} = useSharedFollowTab();
    const inputRange = data.map((_, index) => index * Sizes.width);
    const indicatorWidth = scrollX.interpolate({
        inputRange,
        outputRange: measures.map(measure => measure.width),
    });
    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: measures.map(measure => measure.y),
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
    const {ref, type, setItemIndex} = useSharedFollowTab();

    const onItemPress = useCallback(itemIndex => {
        ref?.current?.scrollToOffset({
            offset: itemIndex * Sizes.width,
        });
        setItemIndex(itemIndex);
    });

    return (
        <View style={_styles.container}>
            <Tabs data={data} onItemPress={onItemPress} />
            <View style={_styles.line} />
            {type === 'followers' && <MyFollowers />}
            {type === 'followings' && <MyFollowings />}
        </View>
    );
};

export default Follow;

const _styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabContainer: {},
    line: {
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
    },

    tabsContainer: {
        width: '100%',
        paddingHorizontal: Sizes.padding * 4,
        paddingTop: Sizes.padding,
    },
});
