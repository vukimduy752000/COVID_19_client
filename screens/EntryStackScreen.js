import React, { useState } from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
    Key
} from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import LogInScreen from './LogInScreen'
import SignUpScreen from './SignUpScreen'

const EntryStack = createStackNavigator();

const EntryStackScreen = ({ navigation }) => {
    return (
        <EntryStack.Navigator screenOptions={{
            title: ""
        }}>
            <EntryStack.Screen name="LogInScreen" component={LogInScreen} />
            <EntryStack.Screen name="SignUpScreen" component={SignUpScreen} />
        </EntryStack.Navigator>
    )
}
export default EntryStackScreen