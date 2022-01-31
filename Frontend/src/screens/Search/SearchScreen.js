import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';

import {styles, Sizes} from '@styles';
import {Header, SearchBar, Countries, Places} from './components';
import {data} from '@constants';
import {HorizontalLine} from '@components';
import {resetGetUser} from '@ducks/user';

const SearchScreen = () => {
    const {t} = useTranslation();
    const [places, setPlaces] = useState(data.places);

    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.container} forceInset={{bottom: 'never'}}>
            <Header />
            <ScrollView contentContainerStyle={{paddingBottom: 40}}>
                <SearchBar />
                <Places places={places} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default SearchScreen;
