import React, { Component } from 'react'
import { Text, ScrollView, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import List from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
export default function Summary({ item }) {
    return (
        <View style={styles.list}>
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
        marginHorizontal: 24,
        display: 'flex',
        justifyContent: 'flex-end',
        borderWidth: 2.2,
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
        fontStyle: 'italic',
    },

    list: {
        padding: 30,
        flex: 1,
        marginTop: 8,
        borderWidth: 3,
        borderRadius: 10,
        borderBottomColor: '#051929',
        borderColor: '#023e8a'
    },

})


