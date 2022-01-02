import React, {useState, useEffect} from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';
import {config, configurePusher} from '../../config';

import {styles, Colors} from '@styles';
import {SectionHeader, SignIn, Information, SNSLinks} from './components';
import {HorizontalLine} from '@components';
import {resetGetUser, getUser} from '@ducks/user';

const SignInScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('hohohhh');
    }, []);

    return (
        <SafeAreaView style={styles.container} forceInset={{bottom: 'never'}}>
            <View style={styles.HeaderContainer}>
                <SectionHeader />
            </View>
            <ScrollView style={styles.BodyContainer}>
                <TouchableOpacity
                    style={{
                        height: 50,
                        width: 50,
                        backgroundColor: Colors.primary,
                    }}
                    onPress={() => dispatch(getUser())}>
                    <Text>Press me to api</Text>
                </TouchableOpacity>

                {/* <SignIn /> */}
                {/* <HorizontalLine margin={25} /> */}
                {/* <Information t={t} navigation={navigation} /> */}
                {/* <HorizontalLine margin={15} /> */}
                {/* <SNSLinks t={t} navigation={navigation} /> */}
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignInScreen;
