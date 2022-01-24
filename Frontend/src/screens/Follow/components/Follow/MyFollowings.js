import React, {useState, useEffect, useMemo} from 'react';
import {View, Text, Animated, FlatList, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {Marginer, FollowCard, Loader} from '@components';
import {styles, Sizes, Colors} from '@styles';
import {fetchMyFollowings, resetAPIStatus} from '@ducks/follow';

const MyFollowings = () => {
    const nav = useNavigation();

    const dispatch = useDispatch();
    const {isFetching, error, myFollowings} = useSelector(
        state => state.follow,
    );

    const [stopFetch, setStopFetch] = useState(false);

    useEffect(() => {
        if (error === null) return;

        Alert.alert('backpacker', 'Something went wrong...');
        dispatch(resetAPIStatus);
    }, [error]);

    useEffect(() => {
        dispatch(fetchMyFollowings());
    }, []);

    useEffect(() => {
        console.log(myFollowings);
    }, [myFollowings]);

    const onPressProfile = follow => {
        nav.navigate('Profile', {user_id: follow.user_id});
    };

    const handleOnEndReached = () => {
        if (!stopFetch) {
            setStopFetch(true);
        }
    };

    const onPressFollowing = () => {
        console.log('hphp');
    };

    if (isFetching) {
        return <Loader bottom={300} />;
    }

    return (
        <FlatList
            data={myFollowings}
            keyExtractor={item => {
                return `follow:${item.user_id}`;
            }}
            keyboardDismissMode="on-drag"
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={250}
            onEndReachedThreshold={0.01}
            // bounces={false}
            renderItem={({item}) => {
                return (
                    <FollowCard
                        follow={item}
                        onPressProfile={onPressProfile}
                        onPressFollowing={onPressFollowing}
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
            onEndReached={handleOnEndReached}
            onEndReachedThreshold={0.5}
            onScrollBeginDrag={() => {
                setStopFetch(false);
            }}
        />
    );
};

export default MyFollowings;
