import React from 'react';
import {
    StyleSheet,
    View,
    Text,

    ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient'

// Import external source Font Awesome


export default DetailScreen = ({ route, navigation }) => {
    const { item } = route.params
    console.log(item)
    return (
        <View style={styles.container}>
            <LinearGradient 
                colors={['#0377a8', '#2fb5c7']}
                style={[StyleSheet.absoluteFill, styles.linearGradient,]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            />

            <ScrollView style={styles.card}>
                <LinearGradient
                    colors={['#fff3e0', '#f57c00']}
                    style={[StyleSheet.absoluteFill, styles.linearGradient,]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                />
                <View style={styles.item}>
                    <Text style={styles.title}>Country</Text>
                    <Text style={styles.content}>{item.Country}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.title}>Country Code</Text>
                    <Text style={styles.content}>{item.CountryCode}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.title}>Slug</Text>
                    <Text style={styles.content}>{item.Slug}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.title}>New Confirmed</Text>
                    <Text style={styles.content}>{item.NewConfirmed}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.title}>Total Confirmed</Text>
                    <Text style={styles.content}>{item.TotalConfirmed}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.title}>New Deaths</Text>
                    <Text style={styles.content}>{item.NewDeaths}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.title}>Total Deaths</Text>
                    <Text style={styles.content}>{item.TotalDeaths}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.title}>New Recovered</Text>
                    <Text style={styles.content}>{item.NewRecovered}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.title}>Total Recovered</Text>
                    <Text style={styles.content}>{item.TotalRecovered}</Text>
                </View>

            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 16
    },

    content: {
        fontWeight: '500',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        overflow: 'hidden',
        fontWeight: '500',
        fontSize: 24,
        fontStyle: 'italic',
        borderWidth: 1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,

    },

    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center'
    },

    card: {
        marginTop: 16,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1
    },
});