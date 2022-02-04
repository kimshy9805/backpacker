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

const useSharedChat = () => useBetween(useChat);
