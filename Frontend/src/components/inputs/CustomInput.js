import React, {useState} from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

import {Sizes, Colors, Typography} from '../../styles';

const TextHolder = props => {
    const {
        field: {name, onBlur, onChange, value},
        form: {errors, touched, setFieldTouched},
        fieldStyle,
        ...inputProps
    } = props;

    const hasError = errors[name] && touched[name];
    return (
        <>
            <TextInput
                style={[
                    styles.defaultInput,
                    hasError && styles.errorInput,
                    fieldStyle && fieldStyle,
                ]}
                value={value}
                multiline={true}
                autoFocus={true}
                onChangeText={text => onChange(name)(text)}
                placeholderTextColor={Colors.lightGray}
                onBlur={() => {
                    setFieldTouched(name);
                    onBlur(name);
                }}
                {...inputProps}
            />
            {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
        </>
    );
};

export default TextHolder;

const styles = StyleSheet.create({
    defaultInput: {
        width: '100%',
        height: 43,
        borderRadius: Sizes.radius,
        backgroundColor: Colors.lightGray2,
        paddingHorizontal: Sizes.padding,
        marginVertical: Sizes.base,
    },
    errorInput: {
        borderColor: 'red',
    },
    errorText: {
        fontSize: 10,
        color: 'red',
        textAlign: 'right',
    },
});
