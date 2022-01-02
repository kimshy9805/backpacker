import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import {SignInScreen, AuthScreen, UpdateScreen} from '../screens/index';

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false,
};

const AppStackNavigator = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            screenOptions={screenOptionStyle}
            initialRouteName={'Auth'}>
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Update" component={UpdateScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
        </Stack.Navigator>
    );
};

export default AppStackNavigator;
