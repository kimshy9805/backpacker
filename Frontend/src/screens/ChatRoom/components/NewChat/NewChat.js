import React, {useEffect} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector, useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {styles, Colors, Typography, Sizes} from '@styles';
import {useSharedRBSheet, useSharedInput} from '../../Hooks';
import {searchUsers} from '@ducks/chat';
import {fetchMyFollowings} from '@ducks/follow';
import {SearchUserCard} from '@components';
import {data} from '@constants';

const NewChat = () => {
    const nav = useNavigation();
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user);
    // const {searchedUsers} = useSelector(state => state.chat);

    const {onCloseBSheet} = useSharedRBSheet();
    const {content, onChangeContent} = useSharedInput();

    useEffect(() => {
        // dispatch(searchUsers({query: content}));
    }, [content]);

    const handleOnEndReached = () => {
        if (!stopFetch) {
            setStopFetch(true);
        }
    };

    const onPressFollowing = () => {
        console.log('hphp');
    };

    const onPressProfile = follow => {
        nav.navigate('Profile', {user_id: follow.user_id});
    };

    return (
        <View>
            {/* Header */}
            <View style={_styles.headerContainer}>
                <TouchableOpacity onPress={onCloseBSheet}>
                    <Feather
                        name="arrow-left"
                        size={30}
                        color={Colors.primary}
                    />
                </TouchableOpacity>
                <Text style={{...Typography.bold3, color: Colors.white}}>
                    New Chat
                </Text>
                <View style={{width: 30}} />
            </View>
            {/* Receiving */}
            <View style={_styles.searchContainer}>
                <Text style={{color: Colors.white, marginRight: 3}}>
                    받는 사람:
                </Text>
                <TextInput
                    value={content}
                    style={_styles.input}
                    placeholder={'Type here'}
                    placeholderTextColor={Colors.darkGray}
                    onChangeText={onChangeContent}
                />
            </View>
            {/* List of users */}
            <View style={{height: '100%'}}>
                <FlatList
                    data={data.users}
                    keyExtractor={item => {
                        return `${item.user_id}`;
                    }}
                    keyboardDismissMode="on-drag"
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={250}
                    onEndReachedThreshold={0.01}
                    renderItem={({item}) => {
                        return (
                            <SearchUserCard
                                user={item}
                                onPressProfile={onPressProfile}
                            />
                        );
                    }}
                    ListEmptyComponent={
                        <View
                            style={[
                                styles.flexRowCenterCenter,
                                {backgroundColor: Colors.black},
                            ]}>
                            <Text>You have not followed anyone!</Text>
                        </View>
                    }
                />
            </View>
        </View>
    );
};

export default NewChat;

const _styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: Sizes.padding,
        paddingBottom: Sizes.padding,
        backgroundColor: Colors.black,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
        borderTopLeftRadius: Sizes.radius * 2,
        borderTopRightRadius: Sizes.radius * 2,
    },
    searchContainer: {
        paddingHorizontal: Sizes.padding,
        height: 50,
        ...styles.flexRowCenter,
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
    },
    input: {
        ...Typography.body4,
        color: Colors.darkGray,
        lineHeight: 20,
        flex: 1,
        fontSize: 15,
        paddingRight: 5,
        height: '100%',
    },
});
