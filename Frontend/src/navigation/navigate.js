import React from 'react';
import {View, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';

import {
    SignInScreen,
    AuthScreen,
    UpdateScreen,
    FeedScreen,
    ProfileScreen,
    NewTweetScreen,
    SearchScreen,
    PlaceScreen,
    NotificationScreen,
    MessageScreen,
    ThreadScreen,
    FollowScreen,
} from '../screens/index';
import {TabBarIcon} from '@components';
import {Colors, styles} from '@styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptionStyle = {
    headerShown: false,
};

// Bottom Tab
const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.lightGray,
                tabBarShowLabel: false,
                tabBarStyle: {backgroundColor: Colors.black},
            }}>
            {/* TODO change Image source when focused */}
            <Tab.Screen
                name="Feed"
                component={FeedScreen}
                options={{
                    tabBarIcon: ({focused, color, size}) => (
                        <TabBarIcon icon={'home'} color={color} size={20} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({focused, color, size}) => (
                        <TabBarIcon icon={'search'} color={color} size={20} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationScreen}
                options={{
                    tabBarIcon: ({focused, color, size}) => (
                        <TabBarIcon icon={'bell'} color={color} size={20} />
                    ),
                }}
            />
            <Tab.Screen
                name="Message"
                component={MessageScreen}
                options={{
                    tabBarIcon: ({focused, color, size}) => (
                        <TabBarIcon icon={'envelope'} color={color} size={20} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const AppStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={screenOptionStyle}
            initialRouteName={'Dashboard'}>
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Update" component={UpdateScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="Dashboard" component={TabNavigator} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="NewTweet" component={NewTweetScreen} />
            <Stack.Screen name="Place" component={PlaceScreen} />
            <Stack.Screen name="Thread" component={ThreadScreen} />
            <Stack.Screen name="Follow" component={FollowScreen} />
        </Stack.Navigator>
    );
};

export default AppStackNavigator;
