import React, { useState, useEffect, useInterval } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';


// Import external source Font Awesome

import axios from 'axios'
export default HomeScreen = ({ navigation }) => {

    const [summary, setSummary] = React.useState("waiting....");

    //calling our service
    useEffect(() => {
        let mounted = false;
        useIn
        axios
            .get("http://192.168.0.27:3000/home")
            .then((response) => {
                if (!mounted) {
                    setSummary(response.data)
                    console.log(response.data)
                }
                // console.log(summary.data.Global.TotalConfirmed)

            }).catch(err => {
                // console.log(err.response.data.message)
            })


        return () => mounted = true;

    }, []);


    return (
        <View styles={styles.container}>
            <Text>{JSON.stringify(summary)}</Text>
            {/* <FlatList
                data={summary.data.Countries}
                renderItem={({ item }) => <Text>{item.Country}</Text>}
                keyExtractor={(item, index) => item.CountryCode}
            >

            </FlatList> */}
            {/* <Text>{{summary.data.Global.NewConfirmed} || {}}</Text> */}
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