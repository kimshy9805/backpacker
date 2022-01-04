import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';

import {styles} from '@styles';
import {HorizontalLine} from '@components';
import {resetGetUser} from '@ducks/user';

const ProfileScreen = ({route}) => {
    // Variables
    const {userId} = route.params;
    const {t} = useTranslation();
    const navigation = useNavigation();

    // Redux
    const dispatch = useDispatch();
    const {error} = useSelector(state => state.user);

    // API Requests
    useEffect(() => {
        // dispatch(getUser({userId: userId}));
    }, []);

    // API Error Handling
    useEffect(() => {
        if (error === null) return;
    }, [error]);

    return (
        <SafeAreaView style={styles.container} forceInset={{bottom: 'never'}}>
            <Text>Profile</Text>
            {/* <View style={styles.HeaderContainer}>
                <SectionHeader navigation={navigation} />
            </View>
            <ScrollView style={styles.BodyContainer}>
                <SignIn />
                <HorizontalLine margin={25} />
                <SNSLinks t={t} navigation={navigation} />
            </ScrollView> */}
        </SafeAreaView>
    );
};

export default ProfileScreen;
