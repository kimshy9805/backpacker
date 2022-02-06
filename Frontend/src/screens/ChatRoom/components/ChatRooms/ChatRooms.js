import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';

import {ChatRoomCard, Loader} from '@components';
import {data} from '@constants';
import NewChat from '../NewChat';
import {icons, images} from '@constants';
import {Typography, Sizes, Colors, styles} from '@styles';
import {useSharedRBSheet} from '../../Hooks';

const ChatRooms = () => {
    const nav = useNavigation();

    const {refRBSheet} = useSharedRBSheet();
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
            <RBSheet
                ref={refRBSheet}
                animationType={'fade'}
                closeOnDragDown={true}
                dragFromTopOnly={true}
                closeOnPressMask={false}
                height={Sizes.height / 1.1}
                customStyles={{
                    wrapper: _styles.sheetWrapper,
                    container: _styles.sheetContainer,
                    draggableIcon: _styles.sheetDraggableIcon,
                }}>
                <NewChat />
            </RBSheet>
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

    sheetWrapper: {
        backgroundColor: '#000000AA',
    },
    sheetContainer: {
        borderTopLeftRadius: Sizes.radius * 2,
        borderTopRightRadius: Sizes.radius * 2,
        backgroundColor: Colors.white,
        backgroundColor: '#000',
    },
    sheetDraggableIcon: {
        backgroundColor: Colors.white,
    },
});
