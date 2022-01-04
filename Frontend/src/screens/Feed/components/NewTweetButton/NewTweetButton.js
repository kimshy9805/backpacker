import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {data} from '@constants';
import {Marginer, HorizontalLine} from '@components';
import {styles, Colors} from '@styles';

const NewTweetButton = () => {
    const nav = useNavigation();

    useEffect(() => {
        console.log(data.NewTweetButtons);
    }, []);

    return (
        <TouchableOpacity
            style={styles.newTweetButtonContainer}
            onPress={() => nav.navigate('NewTweet')}>
            <MaterialCommunityIcons
                name={'feather'}
                size={30}
                color={Colors.white}
            />
        </TouchableOpacity>
    );
};

export default NewTweetButton;
