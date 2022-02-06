import React, {
    Component,
    useState,
    useEffect,
    useRef,
    useCallback,
} from 'react';
import {useBetween} from 'use-between';

const useChat = () => {
    const [user, setUser] = useState('');

    return {user};
};

const useInput = () => {
    const [content, setContent] = useState('');

    // useCallback => "avoid unnecessary re-renders"
    const onChangeContent = useCallback(text => {
        setContent(text);
    });

    const resetContent = useCallback(() => {
        setContent('');
    });

    return {
        content,
        onChangeContent,
        resetContent,
    };
};

export const useSharedChat = () => useBetween(useChat);
export const useSharedInput = () => useBetween(useInput);
