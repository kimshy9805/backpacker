import React, {useEffect} from 'react';
import {LogBox, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import AppStackNavigator from './src/navigation/navigate';
import store from './src/redux/store';
import * as RootNavigation from './src/navigation/rootNavigation';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {
    faHome,
    faSearch,
    faBell,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
    setJSExceptionHandler,
    setNativeExceptionHandler,
} from 'react-native-exception-handler';
import {errorHandler} from '@utils';


// javascript
setJSExceptionHandler((e, isFatal) => {
    errorHandler(e, isFatal);
}, true);


// FontAwesome Library
library.add(fab, faHome, faSearch, faBell, faEnvelope);

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
