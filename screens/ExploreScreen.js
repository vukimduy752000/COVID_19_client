import React, { useEffect, useState } from 'react';
import {

    StyleSheet,

    View,

    Text,

    FlatList,
    ActivityIndicator,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient'
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
        <View style={styles.container}>
            <LinearGradient
                colors={['#0377a8', '#2fb5c7']}
                style={[StyleSheet.absoluteFill, styles.linearGradient,]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            />
            <Text style={styles.header}>Choose your country for more details</Text>
            {isLoading ? <ActivityIndicator /> :
                <FlatList style={styles.flatlist}
                    data={countries}
                    keyExtractor={({ CountryCode }, index) => CountryCode}
                    renderItem={({ item }) => (
                        <Country style={styles.item} item={item} navigation={navigation} />
                    )}
                />
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#B3E5FC"
    },
    flatlist: {
        padding: 16,
        marginTop: 8,
    },
    header: {
        marginLeft: 24,
        marginRight: 24,
        marginTop: 16,
        padding: 16,
        borderRadius: 10,
        borderWidth: 1,
        fontWeight: "bold",
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 22,
        overflow: "hidden",
        textAlign: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
    }
});