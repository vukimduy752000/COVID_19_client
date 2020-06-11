import React from 'react'
import { Text, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'

export default function Country({ item, navigation: { navigate } }) {
    return (
        <TouchableOpacity onPress={() => navigate('ExploreScreen', { item })}>
            <View style={styles.item}>
                <Text style={styles.title}>{item.Country}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: "transparent",
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10
    },
    title: {
        fontWeight: '300'
    }
})


