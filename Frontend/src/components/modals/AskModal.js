import React, {useState} from 'react';
import {Modal, Image, Text, View, TouchableOpacity} from 'react-native';

import {Sizes, Typography, styles} from '@styles';
import {icons, images} from '@constants';
import {IconButton, Marginer} from '@components';

class AskModal extends React.Component {
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
        const {onPressYes, onPressNo, msg} = this.props;

        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}>
                <View style={styles.Modal}>
                    {/* QR Detail */}
                    <Marginer margin={10} />
                    <View style={[styles.ModalBottom, styles.boxRadius]}>
                        <View style={styles.flexColumnCenterCenter}>
                            <IconButton
                                icon={icons.neon_info_r}
                                buttonStyle={{
                                    height: 100,
                                }}
                                iconStyle={{
                                    width: 70,
                                    height: 70,
                                }}
                            />
                            <Text style={{...Typography.bold4}}>{msg}</Text>
                            <View
                                style={[
                                    styles.flexRowCenterBetween,
                                    {width: '100%'},
                                ]}>
                                <TouchableOpacity
                                    style={[
                                        styles.CloseBtn,
                                        {
                                            width: '45%',
                                            height: 40,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        },
                                    ]}
                                    onPress={onPressNo}>
                                    <Text>No</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        styles.CloseBtn,
                                        {
                                            width: '45%',
                                            height: 40,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        },
                                    ]}
                                    onPress={onPressYes}>
                                    <Text>Yes</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

export default AskModal;
