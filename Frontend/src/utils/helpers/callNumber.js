import {Linking, Alert, Platform} from 'react-native';

const callNumber = phone => {
    if (phone.includes('-')) {
        let dashIndex = phone.indexOf('-');
        phone = phone.slice(0, dashIndex) + phone.slice(dashIndex + 1);
    }
    console.log('callNumber ----> ', phone);
    let phoneNumber = phone;

    if (Platform.OS === 'ios') {
        phoneNumber = `tel:${phone}`;
    } else {
        phoneNumber = `telprompt:${phone}`;
    }
    console.log(phoneNumber);
    Linking.canOpenURL('tel://62463207')
        .then(supported => {
            if (!supported) {
                Alert.alert('Phone number is not available');
            } else {
                return Linking.openURL(phoneNumber);
            }
        })
        .catch(err => console.log(err));
};

export {callNumber};

