import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    TabBarIOS,
    Text,
    Button,
    FlatList,
    ActivityIndicator,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Country from './componentsScreen/Country'

// Import external source Font Awesome
import Icon from 'react-native-vector-icons/Ionicons'

export default ExploreScreen = ({ navigation }) => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://127.0.0.1:3000/summary')
            .then(response => response.json())
            .then(json => setCountries(json.data.Countries))
            .catch(error => console.error(error))
            .finally(() => setLoading(false))
    }, [])

    return (
        <View styles={styles.container}>
            {isLoading ? <ActivityIndicator /> :
                <FlatList
                    data={countries}
                    keyExtractor={({ CountryCode }, index) => CountryCode}
                    renderItem={({ item }) => (
                        <Country item={item} navigation={navigation} />
                    )}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});