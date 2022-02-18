import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Modal,
} from 'react-native';
import moment from 'moment';

import {styles, Colors, Sizes, Typography} from '@styles';
import {Marginer} from '@components';
import {icons} from '@constants';

class ErrorModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            time: moment().format('YYYY-MM-DD HH:mm:ss'),
        };
    }

    show = () => {
        this.setState({show: true});
    };

    close = () => {
        this.setState({show: false});
    };

    render() {
        let {show, time} = this.state;
        const {_handleClose, error} = this.props;

        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={close}>
                <View style={styles.Modal}>
                    <View style={[styles.ModalBottom, styles.boxRadius]}>
                        <View style={styles.flexColumnCenterCenter}>
                            <View style={_styles.headerContainer}>
                                <Text style={_styles.errorMessage}>
                                    Error Message
                                </Text>
                            </View>
                            <View style={_styles.messageContainer}>
                                <Text
                                    style={_styles.error}
                                    numberOfLines={3}
                                    ellipsizeMode="tail">
                                    {error}
                                </Text>
                                <Marginer margin={5} />
                                <View>
                                    <Text style={{...Typography.body6}}>
                                        {time}
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                style={_styles.buttonContainer}
                                onPress={_handleClose}>
                                <Image
                                    source={icons.neon_confirm_r}
                                    style={[
                                        styles.defaultIcon,
                                        {marginRight: 8},
                                    ]}
                                    resizeMode="contain"
                                />
                                <Text style={{color: Colors.primary}}>
                                    Confirm
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

export default ErrorModal;

const _styles = StyleSheet.create({
    messageContainer: {
        width: '100%',
        alignItems: 'center',
        marginVertical: Sizes.padding,
    },

    headerContainer: {
        width: '80%',
        height: 35,
        backgroundColor: Colors.primary,
        borderRadius: Sizes.radius * 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    errorMessage: {
        ...Typography.bold3,
        color: Colors.white,
    },

    error: {
        ...Typography.bold4,
        marginVertical: Sizes.padding,
    },

    buttonContainer: {
        ...styles.CloseBtn,
        ...styles.flexRowCenterCenter,
        width: 150,
        height: 40,
        borderColor: Colors.primary,
    },
});
