import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// Import external source Font Awesome
import Icon from 'react-native-vector-icons/Ionicons'

import ExploreScreen from './ExploreScreen'
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'
import SettingScreen from './SettingScreen'


const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const SettingStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor="#fff">

      <Tab.Screen
        name="HomeScreen"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: "#694fad",
          tabBarIcon: ({ color }) => (
            <Icon name='ios-home' color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name='ios-person' color={color} size={26} />
          )
        }}
      />

      <Tab.Screen
        name="ExploreScreen"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name='ios-eye' color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingStackScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name='ios-settings' color={color} size={26} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const SettingStackScreen = ({ navigation }) => {
  return (
    <SettingStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}>
      <SettingStack.Screen name="Setting" component={SettingScreen}
        options={{
          title: 'Setting',
          headerLeft: () => (
            <Icon.Button
              name='ios-menu'
              backgroundColor='#1f65ff'
              size={25}
              onPress={() => navigation.openDrawer()} />
          )
        }}
      ></SettingStack.Screen>
    </SettingStack.Navigator>
  )
}


const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#694fad',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button name="ios-menu"
            size={25}
            backgroundColor="#694fad"
            onPress={() => (navigation.openDrawer())} />
        )
      }} />
    </HomeStack.Navigator>
  )
}

const ProfileStackScreen = ({ navigation }) => {
  return (
    <ProfileStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#d02860',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} options={{
        title: 'Profile',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#d02860"
            onPress={() => (navigation.openDrawer())} />
        )
      }} />
    </ProfileStack.Navigator>
  )
}

const ExploreStackScreen = ({ navigation }) => {
  return (
    <ExploreStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <ExploreStack.Screen
        name="ExploreScreen" component={ExploreScreen}
        options={{
          title: 'Explore',
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()} />
          )
        }}
      ></ExploreStack.Screen>
    </ExploreStack.Navigator>
  )
}

export default TabBar;
