import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';
import {config, configurePusher} from '../../config';

import {styles} from '@styles';
import {SectionHeader, SignIn, Information, SNSLinks} from './components';
import {HorizontalLine} from '@components';
import {resetGetUser} from '@ducks/user';

const HomeScreen = () => {
    const {t} = useTranslation();
    const navigation = useNavigation();

    const dispatch = useDispatch();
    const {isGetUserSuccess, user} = useSelector(state => state.user);
    const {isSignIn} = useSelector(state => state.auth);

    useEffect(() => {
        if (
            isGetUserSuccess === null ||
            isGetUserSuccess === false ||
            isSignIn === false
        )
            return;
        if (isGetUserSuccess && isSignIn) {
            configurePusher(user);
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{name: 'Explore'}],
                }),
            );
        }

        return () => {
            dispatch(resetGetUser());
        };
    }, [isGetUserSuccess]);

    return (
        <SafeAreaView style={styles.container} forceInset={{bottom: 'never'}}>
            <View style={styles.HeaderContainer}>
                <SectionHeader navigation={navigation} />
            </View>
            <ScrollView style={styles.BodyContainer}>
                <SignIn />
                <HorizontalLine margin={25} />
                <SNSLinks t={t} navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
