import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';

import {styles} from '@styles';
import {Header, ChatRooms, NewChat} from './components';
import {NewChatButton} from '@components';
import {useSharedRBSheet} from './Hooks';

const ChatRoomScreen = () => {
    const dispatch = useDispatch();

    const {onShowBSheet} = useSharedRBSheet();

    return (
        <SafeAreaView style={styles.container} forceInset={{bottom: 'never'}}>
            <Header />
            <ChatRooms />
            <NewChatButton onPress={onShowBSheet} />
        </SafeAreaView>
    );
};

export default ChatRoomScreen;
