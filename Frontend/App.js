import React, {useEffect} from 'react';
import {LogBox, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import AppStackNavigator from './src/navigation/navigate';
import store from './src/redux/store';
import * as RootNavigation from './src/navigation/rootNavigation';
import {
    setJSExceptionHandler,
    setNativeExceptionHandler,
} from 'react-native-exception-handler';

function handleApplicationError(errorMessage) {
    const title = 'Unexpected error occurred';
    const message = errorMessage + '\nApplication must be restarted.';
    Alert.alert(title, message, [{text: 'OK '}]);
}

// setJSExceptionHandler((e, isFatal) => {
//     if (isFatal) {
//         const error = `Error: ${isFatal ? 'Fatal:' : ''} ${e.name} ${
//             e.message
//         }`;
//         // handleApplicationError(error);
//     }
// }, true);

// setJSExceptionHandler(errorHandler, true);

// setNativeExceptionHandler(handleApplicationError, true, false);

const App = () => {
    //Log ignore
    useEffect(() => {
        LogBox.ignoreLogs([
            'VirtualizedLists should never be nested',
            'isInitialValid has been deprecated and will',
            'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
            'Task orphaned for request <NSMutable',
            'ImmutableStateInvariantMiddleware took 40ms,',
            'Each child in a list should have a unique',
            "Can't perform a React state update on an unmounted component.",
        ]);
        SplashScreen.hide();
    }, []);

    if (__DEV__) {
        console.log('Development');
    } else {
        console.log = () => {};
    }

    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <NavigationContainer ref={RootNavigation.navigationRef}>
                    <AppStackNavigator />
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
};

export default App;
