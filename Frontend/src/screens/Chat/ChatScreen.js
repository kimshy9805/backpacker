import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useSelector, useDispatch} from 'react-redux';

import {styles} from '@styles';
import {Header, Messages, InputBox} from './components';

const ChatScreen = ({route}) => {
    const {chatroom_id, users} = route.params;
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.container} forceInset={{bottom: 'never'}}>
            <Header />
            <Messages />
            <InputBox />
        </SafeAreaView>
    );
};

export default ChatScreen;
