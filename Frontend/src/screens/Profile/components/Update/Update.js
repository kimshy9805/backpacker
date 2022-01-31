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
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {styles, Colors, Typography, Sizes} from '@styles';
import {ProfilePicture, Marginer, TextButton} from '@components';
import {updateUser} from '@ducks/user';
import {useSharedRBSheet, useSharedProfile} from '../../hooks';

const Update = () => {
    const nav = useNavigation();
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user);
    const {onCloseBSheet} = useSharedRBSheet();
    const {
        name,
        description,
        location,
        email,
        dob,
        dobString,
        isDateOpened,
        isChanged,
        setDob,
        setDobString,
        setIsDateOpened,
    } = useSharedProfile({user});

    const onPressUpdate = () => {
        // dispatch(updateUser());
        onCloseBSheet();
    };

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
                {isChanged ? (
                    <TextButton
                        label={'Update'}
                        labelStyle={_styles.update}
                        onPress={onPressUpdate}
                        containerStyle={_styles.updateContainer}
                    />
                ) : (
                    <View style={{width: 30}} />
                )}
            </View>
            {/* ImageBackground */}
            <ImageBackground
                style={_styles.backgroundContainer}
                source={{uri: 'https://picsum.photos/200'}}
                resizeMode="stretch"
            />
            <TouchableOpacity style={_styles.profilePictureContainer}>
                <ProfilePicture size={75} image={'https://picsum.photos/200'} />
            </TouchableOpacity>
            <Marginer margin={30} />
            {/* Details */}
            <KeyboardAwareScrollView>
                {/* Name */}
                <View style={_styles.detailConatiner}>
                    <Text style={_styles.whiteText}>Name</Text>
                    <View style={{paddingHorizontal: Sizes.padding}}>
                        <Text style={_styles.blueText}>{name}</Text>
                    </View>
                </View>
                <View style={_styles.detailConatiner}>
                    <Text style={_styles.whiteText}>Description</Text>
                    <View style={{paddingHorizontal: Sizes.padding}}>
                        <Text style={_styles.blueText}>{description}</Text>
                    </View>
                </View>
                <View style={_styles.detailConatiner}>
                    <Text style={_styles.whiteText}>Email</Text>
                    <View style={{paddingHorizontal: Sizes.padding}}>
                        <Text style={[_styles.blueText]}>{email}</Text>
                    </View>
                </View>
                <View style={_styles.detailConatiner}>
                    <Text style={_styles.whiteText}>Location</Text>
                    <Text></Text>
                </View>
                <View style={_styles.detailConatiner}>
                    <Text style={_styles.whiteText}>Date of Birth</Text>
                    <TouchableOpacity
                        style={_styles.dobContainer}
                        onPress={() => setIsDateOpened(true)}>
                        <Text style={_styles.blueText}>{dobString}</Text>
                    </TouchableOpacity>
                    <DatePicker
                        modal
                        open={isDateOpened}
                        date={dob}
                        mode={'date'}
                        onConfirm={date => {
                            setIsDateOpened(false);
                            setDob(date);
                            setDobString(moment(date).format('YYYY-MM-DD'));
                        }}
                        onCancel={() => {
                            setIsDateOpened(false);
                        }}
                    />
                </View>
            </KeyboardAwareScrollView>
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
    profilePictureContainer: {
        position: 'absolute',
        top: 165,
        left: Sizes.padding - 5,
        borderRadius: Sizes.radius * 5,
        borderWidth: 3,
        borderColor: Colors.black,
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

    dobContainer: {
        borderRadius: Sizes.radius,
        paddingHorizontal: Sizes.padding,
        justifyContent: 'center',
        alignItems: 'flex-start',
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

    updateContainer: {
        backgroundColor: Colors.black,
        height: 25,
    },
    update: {
        ...Typography.bold4,
        color: Colors.primary,
    },
});
