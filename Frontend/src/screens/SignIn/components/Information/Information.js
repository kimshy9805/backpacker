import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Formik, Field} from 'formik';
import {useDispatch} from 'react-redux';

import {Colors, Typography, Sizes, styles} from '@styles';
import {SubscribeButton, Marginer, CustomInput} from '@components';
import {signInUser} from '@ducks/auth';
import {icons} from '@constants';
import {signInValidationSchema} from '@utils';

const Information = ({t, navigation}) => {
    const dispatch = useDispatch();

    const _manualSignIn = async payload => {
        let data = {
            email: payload.email,
            password: payload.password,
            login_method: 'manual',
        };
        dispatch(signInUser(data));
    };

    return (
        <View>
            <Formik
                validationSchema={signInValidationSchema}
                isInitialValid={true}
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={(values, {}) => {
                    _manualSignIn(values);
                }}
                onReset={true}>
                {({handleSubmit, isValid}) => (
                    <>
                        <Field
                            component={CustomInput}
                            name="email"
                            placeholder={t('SIGNUP_SCREEN_EMAIL')}
                        />
                        <Field
                            component={CustomInput}
                            name="password"
                            placeholder={t('SIGNUP_SCREEN_PASSWORD')}
                        />
                        <Text
                            style={{
                                ...Typography.body5,
                                alignSelf: 'flex-end',
                                marginVertical: Sizes.base,
                            }}>
                            Forgot your password?
                        </Text>
                        <Marginer margin={10} />
                        <SubscribeButton
                            icon={icons.neon_confirm_w}
                            text={'SIGN IN'}
                            onPress={() => {
                                handleSubmit();
                            }}
                            isValid={isValid}
                            buttonStyle={{backgroundColor: Colors.primary}}
                            textStyle={{
                                color: Colors.white,
                                ...Typography.bold3,
                            }}
                        />
                    </>
                )}
            </Formik>
        </View>
    );
};

export default Information;
