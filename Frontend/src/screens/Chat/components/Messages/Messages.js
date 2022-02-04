import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {MessageCard} from '@components';
import {data} from '@constants';
import {styles} from '@styles';

const Messages = () => {
    console.log(data.chats[0].messages);
    return (
        <View style={styles.container}>
            <FlatList
                data={data.chats[0].messages}
                keyExtractor={item => {
                    return `${item.message_id}`;
                }}
                renderItem={({item}) => {
                    return <MessageCard message={item} />;
                }}
            />
        </View>
    );
};

export default Messages;
