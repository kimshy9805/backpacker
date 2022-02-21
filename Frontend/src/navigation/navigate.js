import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

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
    ChatRoomScreen,
    ChatScreen,
    ThreadScreen,
    FollowScreen,
    ReportScreen,
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
                name="ChatRoom"
                component={ChatRoomScreen}
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
    const {error} = useSelector(state => state.error);

    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <Stack.Navigator
            screenOptions={screenOptionStyle}
            initialRouteName={'Auth'}>
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Update" component={UpdateScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="Dashboard" component={TabNavigator} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="NewTweet" component={NewTweetScreen} />
            <Stack.Screen name="Place" component={PlaceScreen} />
            <Stack.Screen name="Thread" component={ThreadScreen} />
            <Stack.Screen name="Follow" component={FollowScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
            <Stack.Screen name="Report" component={ReportScreen} />
        </Stack.Navigator>
    );
};

export default AppStackNavigator;
