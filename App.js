import React, { useState, useMemo, useEffect } from 'react';
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
import AsyncStorage from '@react-native-community/async-storage'

import MainTabBar from './screens/MainTabBar'

// Import external source Font Awesome
import Icon from 'react-native-vector-icons/Ionicons'

// Screens
import { DrawerContent } from './screens/DrawerContent'
import EntryStackScreen from './screens/EntryStackScreen'

// Authentication
import { AuthenticationContext } from './components/context'

const Drawer = createDrawerNavigator();

const App = () => {

  //The reason I created the userToke is to validate the login screen so that it can judge the user to move to the home page or not
  const [userToken, setUserToken] = React.useState(null);

  //Can use useMemo to memorise the function for better optimization
  const authContext = React.useMemo(() => ({
    signIn: async (foundUser) => {

      console.log(foundUser);
      setUserToken(String(foundUser[0].userToken))
      console.log(userToken);
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch (error) {
        console.log(error)
      }
    },

    signOut: async () => {
      //setUserToken(null);
      try {
        setUserToken(null);
        await AsyncStorage.removeItem('userToken');
      } catch (error) {
        console.log(error)
      }
    },

    signUp: () => {
      //setUserToken('1234')
      //haven't done yet
    },
  }))

  useEffect(() => {
    //  get the token for the previous user if it's available to manage the state
    //  Fail the logic to test
    async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  return (
    <AuthenticationContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken == null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="customDrawerTabbar" component={MainTabBar} />
          </Drawer.Navigator>
        ) :
          <EntryStackScreen />
        }
      </NavigationContainer>
    </AuthenticationContext.Provider>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  }
});

export default App