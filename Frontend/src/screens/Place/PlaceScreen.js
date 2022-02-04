import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, ImageBackground} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';

import {Background, Body, Map} from './components';
import {useSharedPlaceTab} from './hooks';
import {styles, Colors} from '@styles';
import {data} from '@constants';

const PlaceScreen = ({route}) => {
    const {place_id} = route.params;
    const [place, setPlace] = useState('');
    const {type} = useSharedPlaceTab();

    useEffect(() => {
        setPlace(...data.places.filter(place => place.place_id === place_id));
    }, []);

    return (
        <SafeAreaView
            style={styles.container}
            forceInset={{bottom: 'never', top: 'never'}}>
            <ScrollView style={{flex: 1, backgroundColor: Colors.black}}>
                <Background place={place} />
                <Body place={place} />
            </ScrollView>
            {type === 'about' && <Map />}
        </SafeAreaView>
    );
};

export default PlaceScreen;
