import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ChatRoomCard, Loader} from '@components';
import {data} from '@constants';
import {icons, images} from '@constants';
import {Typography, Sizes, Colors, styles} from '@styles';

const ChatRooms = () => {
    const nav = useNavigation();

    // const { isFecthing } = useSelector(state => state.chatroom);

    const [chatRooms, setChatRooms] = useState(data.chatRooms);

    const _onPressChatRoom = chatRoom => {
        nav.navigate('Chat', {
            chatroom_id: chatRoom.chatroom_id,
            users: chatRoom.users,
        });
    };

    return (
        <View style={_styles.container}>
            <FlatList
                data={chatRooms}
                keyExtractor={item => {
                    return `${item.chatroom_id}`;
                }}
                keyboardDismissMode="on-drag"
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={250}
                onEndReachedThreshold={0.01}
                renderItem={({item}) => {
                    return (
                        <ChatRoomCard
                            chatRoom={item}
                            _onPressChatRoom={_onPressChatRoom}
                        />
                    );
                }}
                // ListFooterComponent={() => isFetching && <Loader />}
                ListEmptyComponent={
                    <View
                        style={[
                            styles.flexRowCenterCenter,
                            {backgroundColor: Colors.black},
                        ]}>
                        <Text>No Chats found</Text>
                    </View>
                }
                onEndReachedThreshold={0.5}
            />
        </View>
    );
};

export default ChatRooms;

const _styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        paddingHorizontal: Sizes.padding * 0.5,
    },
});
