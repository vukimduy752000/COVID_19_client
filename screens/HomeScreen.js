import React, { useState, useEffect, useInterval } from 'react';

import axios from 'axios'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    ActivityIndicator,

} from 'react-native';
import Summary from './componentsScreen/Summary'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

export default HomeScreen = ({ navigation }) => {

    const [summary, setSummary] = useState([]);;
    const [isLoading, setLoading] = useState(true)

    // calling our service
    React.useEffect(() => {
        fetch("http://127.0.0.1:3000/summary")
            .then((response) => response.json())
            .then(json => setSummary(json.data.Global))
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
    }, []);


    return (
        <View style={styles.container} >
            <LinearGradient
                colors={['#0377a8', '#2fb5c7']}
                style={[StyleSheet.absoluteFill, styles.linearGradient,]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            />
            <Text style={styles.header}>Summary Around The World</Text>
            {isLoading ? <ActivityIndicator /> : <Summary item={summary} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 24,
    },

    header: {
        textAlign: "center",
        padding: 24,
        fontWeight: "bold",
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 22,
        borderRadius: 10,
        borderWidth: 3
    }

});