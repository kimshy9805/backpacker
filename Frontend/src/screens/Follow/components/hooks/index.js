import React, {useRef, useState, useEffect, useCallback} from 'react';
import {Animated} from 'react-native';
import {useBetween} from 'use-between';
import {Sizes} from '@styles';

const useFollowTab = () => {
    const ref = useRef();
    const scrollX = useRef(new Animated.Value(0)).current;
    const [itemIndex, setItemIndex] = useState(0);
    const [type, setType] = useState('following');

    const onItemPress = useCallback(itemIndex => {
        ref?.current?.scrollToOffset({
            offset: itemIndex * Sizes.width,
        });
        setItemIndex(itemIndex);
    });

    useEffect(() => {
        switch (itemIndex) {
            case 0:
                setType('myTweets');
                break;
            case 1:
                setType('myTips');
                break;
            case 2:
                setType('myLikes');
                break;
            case 3:
                setType('myReplies');
                break;
        }
    }, [itemIndex]);

    return {ref, scrollX, itemIndex, type, setType, onItemPress, setItemIndex};
};

export const useSharedFollowTab = () => useBetween(useFollowTab);
