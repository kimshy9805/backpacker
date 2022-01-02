import React, {createRef} from 'react';
import {StackActions, CommonActions} from '@react-navigation/native';

export const navigationRef = createRef();

export function navigate(params) {
    const stackState = navigationRef.current?.getCurrentRoute();

    // 현재 Stack이 Store라면 replace
    if (stackState.name === 'Store') {
        navigationRef.current?.dispatch(
            StackActions.replace(params.name, {
                store_no: params.params.store_no,
            }),
        );
        return;
    }

    // 아니면 바로 Store로 navigate
    navigationRef.current?.dispatch(
        CommonActions.navigate({
            name: params.name,
            params: params.params,
        }),
    );
}

export function navigateTo(screen, params) {
    navigationRef.current?.navigate(screen, {params});
}

export function navigateToReset(screen) {
    navigationRef?.current?.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{name: screen}],
        }),
    );
}
