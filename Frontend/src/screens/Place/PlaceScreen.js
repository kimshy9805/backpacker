import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, ImageBackground} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';

import {Header, Background, Description, Articles, Map} from './components';
import {styles} from '@styles';
import {data} from '@constants';
import {HorizontalLine} from '@components';
import {resetGetUser} from '@ducks/user';

const PlaceScreen = ({route}) => {
    const {place_id} = route.params;
    const [place, setPlace] = useState('');

    useEffect(() => {
        setPlace(...data.places.filter(place => place.place_id === place_id));
    }, []);

    return (
        <SafeAreaView
            style={{flex: 1}}
            forceInset={{bottom: 'never', top: 'never'}}>
            <Background place={place} />
            <View style={styles.placeBodyContainer}>
                <Description place={place} />
                <Articles />
            </View>
            <Map />
        </SafeAreaView>
    );
};

export default PlaceScreen;
