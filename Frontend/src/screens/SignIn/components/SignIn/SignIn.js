import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from '@styles';
import {icons} from '@constants';

const SignIn = () => {
    


    return (
        <View style={styles.flexRowCenterBetween}>
            {/* MyProfile & email */}
            <View>
                <Text style={[styles.title_style, styles.title_h2]}>
                    SIGN IN
                </Text>
                <Text style={styles.title_detail}>
                    Log in to kepp track of all your favourite stores {'\n'}and
                    hot deals
                </Text>
            </View>
            <Image
                source={icons.neon_user}
                resizeMode="contain"
                style={styles.title_image}
            />
        </View>
    );
};

export default SignIn;
