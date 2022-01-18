import React, {useState, useEffect, useCallback} from 'react';
import {useBetween} from 'use-between';

const useFormTweet = () => {
    const [content, setContent] = useState('');

    // useCallback => "avoid unnecessary re-renders"
    const onChangeContent = useCallback(text => {
        setContent(text);
    });

    // useCallback자체가 콜될때마다 useEffect
    useEffect(() => {}, [onChangeContent]);

    const resetContent = useCallback(() => {
        setContent('');
    });

    return {
        content,
        onChangeContent,
        resetContent,
    };
};

export const useSharedFormTweet = () => useBetween(useFormTweet);
