import React, {useState} from 'react';
import {Modal, Text, View, TouchableOpacity} from 'react-native';

import {Sizes, Typography, styles, Colors} from '@styles';
import {icons, images} from '@constants';
import {IconButton, Marginer} from '@components';

class MessageModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }

    show = () => {
        this.setState({show: true});
    };

    close = () => {
        this.setState({show: false});
    };

    // 추후 확인 하기
    renderOutsideTouchable(onTouch) {
        const view = <View style={{flex: 1, width: '100%'}} />;
        if (!onTouch) return view;
        return (
            <TouchableOpacity
                onPress={onTouch}
                style={{flex: 1, width: '100%'}}>
                {view}
            </TouchableOpacity>
        );
    }

    render() {
        let {show} = this.state;
        const {msg, onPress} = this.props;

        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}>
                <View style={styles.Modal}>
                    <View style={[styles.ModalBottom, styles.boxRadius]}>
                        <Marginer margin={10} />
                        <View style={styles.flexColumnCenterCenter}>
                            <IconButton
                                icon={icons.neon_info}
                                buttonStyle={{
                                    height: 100,
                                }}
                                iconStyle={{
                                    width: 70,
                                    height: 70,
                                }}
                            />
                            <Text style={{...Typography.bold4}}>{msg}</Text>
                            <TouchableOpacity
                                style={[
                                    styles.CloseBtn,
                                    {
                                        width: 150,
                                        height: 40,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    },
                                ]}
                                onPress={() => {
                                    this.setState({show: false});
                                    onPress();
                                }}>
                                <Text>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

export default MessageModal;
