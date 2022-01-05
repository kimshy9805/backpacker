import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {styles, Colors, Typography, Sizes} from '@styles';
import {ProfilePicture} from '@components';
import {data} from '@constants';
import {useDispatch, useSelector} from 'react-redux';

const NewTweet = () => {
    const nav = useNavigation();

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user);

    const [tweetText, setTweetText] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [newTweet, setNewTweet] = useState({});

    useEffect(() => {
        console.log(tweetText);



    }, [tweetText, imageURL]);

    const onPostTweet = () => {
        // dispatch(postTweet(newTweet));
    };

    return (
        <View style={styles.newTweetContainer}>
            <ProfilePicture image={user.image} />
            <View style={styles.newTweetInputContainer}>
                <TextInput
                    numberOfLines={3}
                    multiline={true}
                    value={tweetText}
                    style={styles.newTweetInput}
                    placeholder={"What's happening?"}
                    onChangeText={text => setTweetText(text)}
                />
            </View>
        </View>
    );
};

export default NewTweet;
