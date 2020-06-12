import React, { Component } from 'react'
import { Text, ScrollView,  StyleSheet,  View } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
export default function Summary({ item }) {
    return (
        <View style={styles.list}>
            <LinearGradient
                colors={['#fff3e0', '#f57c00']}
                style={[StyleSheet.absoluteFill, styles.linearGradient,]}
                start={{ x: 0, y: 0 }}
                end={{ x: 2, y: 2 }}
            />
            <ScrollView>
                <View style={styles.items}>
                    <Text style={styles.title}>New Confirmed</Text>
                    <Text style={styles.cases}>{item.NewConfirmed} </Text>
                </View>

                <View style={styles.items}>
                    <Text style={styles.title}>Total Confirmed</Text>
                    <Text style={styles.cases}>{item.TotalConfirmed} </Text>
                </View>
                <View style={styles.items}>
                    <Text style={styles.title}>New Deaths</Text>
                    <Text style={styles.cases}>{item.NewDeaths} </Text>
                </View>
                <View style={styles.items}>
                    <Text style={styles.title}>Total Deaths</Text>
                    <Text style={styles.cases}>{item.TotalDeaths} </Text>
                </View>
                <View style={styles.items}>
                    <Text style={styles.title}>New Recovered</Text>
                    <Text style={styles.cases}>{item.NewRecovered} </Text>
                </View>
                <View style={styles.items}>
                    <Text style={styles.title}>Total Recovered</Text>
                    <Text style={styles.cases}>{item.TotalRecovered} </Text>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    cases: {
        backgroundColor: "transparent",
        padding: 10,
        marginVertical: 16,
        display: 'flex',
        justifyContent: 'flex-end',
        borderWidth: 2,
        borderStyle: "dotted",
        borderRadius: 15,
        borderStyle: "dotted",
        fontSize: 18,
        fontWeight: "bold"
    },

    items: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        fontSize: 18,
        fontWeight: "bold",
    },

    list: {
        padding: 30,
        flex: 1,
        marginTop: 8,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        overflow: 'hidden'
    },

})


