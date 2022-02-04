import React, {useState, useEffect, useRef, useCallback} from 'react';
import {Animated} from 'react-native';
import {useBetween} from 'use-between';

const usePlaceTab = () => {
    const ref = useRef();
    const scrollX = useRef(new Animated.Value(0)).current;
    const [itemIndex, setItemIndex] = useState(0);
    const [type, setType] = useState('about');

    const onItemPress = useCallback(itemIndex => {
        ref?.current?.scrollToOffset({
            offset: itemIndex * Sizes.width,
        });
        setItemIndex(itemIndex);
    });

    useEffect(() => {
        switch (itemIndex) {
            case 0:
                setType('about');
                break;
            case 1:
                setType('tips');
                break;
            case 2:
                setType('tweets');
                break;
            default:
                setType('about');
                break;
        }
    }, [itemIndex]);

    return {ref, scrollX, itemIndex, type, onItemPress, setItemIndex};
};

export const useSharedPlaceTab = () => useBetween(usePlaceTab);
