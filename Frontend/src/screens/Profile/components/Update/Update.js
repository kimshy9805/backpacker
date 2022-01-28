import React, {useEffect} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {styles, Colors, Typography, Sizes} from '@styles';
import {ProfilePicture} from '@components';
import {useSharedRBSheet, useSharedProfile} from '../../hooks';

const Update = () => {
    const nav = useNavigation();
    const {user} = useSelector(state => state.user);
    const {onCloseBSheet} = useSharedRBSheet();
    const {
        name,
        description,
        location,
        email,
        dob,
        isDateOpened,
        setIsDateOpened,
    } = useSharedProfile({user});

    const onClose = () => {
        nav.goBack();
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
                    Edit profile
                </Text>
                <View style={{width: 30, height: 30}} />
            </View>
            {/* ImageBackground */}
            <ImageBackground
                style={_styles.backgroundContainer}
                source={{uri: 'https://picsum.photos/200'}}
                resizeMode="stretch"
            />
            {/* Details */}
            <View>
                {/* Name */}
                <View style={_styles.detailConatiner}>
                    <Text style={_styles.whiteText}>Name</Text>
                    <Text style={_styles.blueText}>{name}</Text>
                </View>
                <View style={_styles.detailConatiner}>
                    <Text style={_styles.whiteText}>Description</Text>
                    <Text style={_styles.blueText}>{description}</Text>
                </View>
                <View style={_styles.detailConatiner}>
                    <Text style={_styles.whiteText}>Email</Text>
                    <Text style={_styles.blueText}>{email}</Text>
                </View>
                <View style={_styles.detailConatiner}>
                    <Text style={_styles.whiteText}>Location</Text>
                    <Text></Text>
                </View>
                <View style={_styles.detailConatiner}>
                    <Text style={_styles.whiteText}>Date of Birth</Text>
                    <TouchableOpacity
                        style={{
                            width: '100%',
                            height: 43,
                            borderRadius: Sizes.radius,
                            backgroundColor: Colors.lightGray2,
                            paddingHorizontal: Sizes.padding,
                            marginVertical: Sizes.base,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                        }}
                        onPress={() => setIsDateOpened(true)}>
                        <Text>{moment(dob).format('YYYY')}</Text>
                    </TouchableOpacity>
                    {/* <DatePicker
                        modal
                        open={isDateOpened}
                        date={new Date()}
                        mode={'date'}
                        onConfirm={date => {
                            setIsDateOpened(false);
                            console.log(date);
                            // changeDate(date);
                        }}
                        onCancel={() => {
                            setIsDateOpened(false);
                        }}
                    /> */}
                </View>
            </View>
        </View>
    );
};

export default Update;

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
    },
    backgroundContainer: {
        width: '100%',
        height: 150,
    },
    detailConatiner: {
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        padding: Sizes.padding,
        flexDirection: 'row',
        alignItems: 'center',
    },

    whiteText: {
        color: Colors.white,
        ...Typography.bold3,
    },

    greyText: {
        color: 'grey',
        ...Typography.body3,
    },

    blueText: {
        color: Colors.primary,
        ...Typography.body3,
    },
});
