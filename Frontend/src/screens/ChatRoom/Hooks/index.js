import React, {useRef, useState, useEffect, useCallback} from 'react';
import {useBetween} from 'use-between';
import memoize from 'memoizee';
import moment from 'moment';
import {Sizes} from '@styles';

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

export const useSharedRBSheet = () => useBetween(useRBSheet);
export const useSharedInput = () => useBetween(useInput);
