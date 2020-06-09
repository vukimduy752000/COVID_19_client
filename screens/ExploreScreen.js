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

// Import external source Font Awesome
import Icon from 'react-native-vector-icons/Ionicons'

export default ExploreScreen = ({ navigation }) => {
    return (
        <View styles={styles.container}>
            <Text>Explore Screen</Text>
            <Button
                title="Click me"
                onPress={() => alert("Button Clicked.!")}></Button>
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