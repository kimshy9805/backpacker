import React, {useRef, useState, useEffect, useCallback} from 'react';
import {Animated} from 'react-native';
import {useBetween} from 'use-between';
import memoize from 'memoizee';
import {Sizes} from '@styles';

const useActivityTab = () => {
    const ref = useRef();
    const scrollX = useRef(new Animated.Value(0)).current;
    const [itemIndex, setItemIndex] = useState(0);
    const [type, setType] = useState('myTweets');

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

    return {ref, scrollX, itemIndex, type, onItemPress, setItemIndex};
};

const useRBSheet = () => {
    const refRBSheet = useRef();

    const onShowBSheet = () => {
        refRBSheet.current.open();
    };

    const onCloseBSheet = () => {
        refRBSheet.current.close();
    };

    return {refRBSheet, onShowBSheet, onCloseBSheet};
};

const useProfileMemoized = memoize(user => {
    // Thanks to the memoization tool, we got all the closure parameters we need.
    return () =>
        // Parameterized shared hook here.
        useProfile({user});
});

const useProfile = ({user}) => {
    const [name, setName] = useState(user.name);
    const [description, setDescription] = useState(user.details.description);
    const [location, setLocation] = useState(user.details.location);
    const [email, setEmail] = useState(user.email);
    const [dob, setDob] = useState(new Date());
    const [isChanged, setIsChanged] = useState(false);
    const [isDateOpened, setIsDateOpened] = useState(false);

    return {
        name,
        description,
        location,
        dob,
        email,
        isDateOpened,
        setIsDateOpened,
    };
};

export const useSharedActivityTab = () => useBetween(useActivityTab);
export const useSharedRBSheet = () => useBetween(useRBSheet);
export const useSharedProfile = ({user}) => {
    return useBetween(useProfileMemoized(user));
};
