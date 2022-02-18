import React, {useState} from 'react';
import {Modal, View, ActivityIndicator} from 'react-native';

import {Colors, styles} from '@styles';

class LoaderModal extends React.Component {
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

    render() {
        let {show} = this.state;
        const {} = this.props;

        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}>
                <View style={[styles.Modal]}>
                    <View style={styles.flexRowCenterCenter}>
                        <ActivityIndicator
                            size="large"
                            color={Colors.primary}
                        />
                    </View>
                </View>
            </Modal>
        );
    }
}

export default LoaderModal;
