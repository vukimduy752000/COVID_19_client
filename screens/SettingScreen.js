import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    TabBarIOS,
    Text,
    Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LinearGradient from 'react-native-linear-gradient'
// Import external source Font Awesome
import Icon from 'react-native-vector-icons/Ionicons'

export default SettingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#0377a8', '#2fb5c7']}
                style={[StyleSheet.absoluteFill, styles.linearGradient,]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            />
            <Text style={{
                padding: 20,
                fontSize: 30,
            }}>Comming Soon !!!</Text>
            <Button
                style={{
                    borderColor: 'black',
                    backgroundColor: '#fff',
                }}
                color="black"
                title="Rate App"
                onPress={() => alert("Thanks for marking my Assignment")}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
});