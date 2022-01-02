import React, {useState, useEffect, createRef} from 'react';
import {
    View,
    Platform,
    Linking,
    Image,
    Text,
    NativeModules,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import {styles, Colors, Sizes, Typography} from '@styles';
import {Marginer} from '@components';
import {APP_STORE_LINK, PLAY_STORE_LINK} from '../../config';
import {icons, images} from '@constants';

const UpdateScreen = () => {
    const onPressUpdate = () => {
        if (Platform.OS == 'ios') {
            Linking.openURL(APP_STORE_LINK).catch(err =>
                console.error('An error occurred', err),
            );
        } else {
            Linking.openURL(PLAY_STORE_LINK).catch(err =>
                console.error('An error occurred', err),
            );
        }
        NativeModules.DevSettings.reload();
    };

    return (
        <SafeAreaView
            style={styles.container}
            forceInset={{bottom: 'never', top: 'never'}}>
            <ImageBackground
                source={images.update_bg}
                style={{width: '100%', height: '100%', flex: 1}}>
                <View
                    style={[
                        styles.flexColumnCenterStart,
                        {
                            paddingHorizontal: Sizes.padding * 2,
                            height: '100%',
                        },
                    ]}>
                    <Marginer margin={Sizes.height / 8} />
                    <Image
                        source={icons.neon_logo_black}
                        style={{width: 100, height: 100}}
                    />
                    <Marginer margin={30} />
                    <View style={{paddingHorizontal: Sizes.padding * 1.5}}>
                        <Text
                            style={{
                                ...Typography.bold1,
                                color: Colors.white,
                                textAlign: 'center',
                            }}>
                            The NEON app has been updated.
                        </Text>
                    </View>
                    <Marginer margin={15} />
                    <Text style={{...Typography.bold4, color: '#a3a3a3'}}>
                        {`Download the new version on the ${
                            Platform.OS === 'ios' ? 'App Store' : 'Play Store'
                        }.`}
                    </Text>
                    <Marginer margin={15} />
                    <TouchableOpacity
                        style={[
                            styles.flexRowCenterCenter,
                            {
                                backgroundColor: Colors.primary,
                                borderRadius: Sizes.radius,
                                height: 50,
                                width: '100%',
                            },
                        ]}
                        onPress={() => onPressUpdate()}>
                        <Text
                            style={{
                                ...Typography.bold3,
                                color: Colors.white,
                            }}>
                            Update
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default UpdateScreen;
