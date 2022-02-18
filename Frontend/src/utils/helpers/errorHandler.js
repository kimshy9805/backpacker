import React, {useEffect} from 'react';
import {Alert, DevSettings} from 'react-native';

const errorHandler = (e, isFatal) => {
    if (isFatal) {
        console.log('global error caught');
        Alert.alert(
            'Backpacker',
            `Internet connection is unstable. \nPlease try again later`,
            [
                {
                    text: 'Okay',
                    // onPress: () => DevSettings.reload(),
                    style: 'ok',
                },
            ],
        );
        console.log(e);
    }
};

export default errorHandler;
