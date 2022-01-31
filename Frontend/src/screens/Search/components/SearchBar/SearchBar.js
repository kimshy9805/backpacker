import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {styles, Sizes, Colors, Typography} from '@styles';

const SearchBar = () => {
    return (
        <View style={_styles.container}>
            <View style={_styles.searchbar}>
                <AntDesign name={'search1'} size={19} color={Colors.white} />
                <TextInput
                    placeholder="Search"
                    placeholderTextColor={Colors.gray1}
                    style={_styles.input}></TextInput>
                <AntDesign name={'filter'} size={19} color={Colors.white} />
            </View>
        </View>
    );
};

export default SearchBar;

const _styles = StyleSheet.create({
    container: {
        margin: Sizes.padding,
        height: 50,
        backgroundColor: Colors.input,
        borderRadius: Sizes.radius,
        justifyContent: 'center',
    },
    searchbar: {
        ...styles.flexRowCenterBetween,
        flex: 1,
        marginLeft: 9,
        marginRight: 15,
    },
    input: {
        ...Typography.bold4,
        lineHeight: 17,
        color: Colors.white,
        width: 250,
    },
});
