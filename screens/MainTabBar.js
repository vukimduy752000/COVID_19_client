import React from 'react';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// Import external source Font Awesome
import Icon from 'react-native-vector-icons/Ionicons'

import ExploreScreen from './ExploreScreen'
import HomeScreen from './HomeScreen'
import InstructionScreen from './InstructionScreen'
import SettingScreen from './SettingScreen'
import DetailScreen from './DetailScreen'

import { Avatar } from 'react-native-paper';


const HomeStack = createStackNavigator();
const InstructionStack = createStackNavigator();
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
          tabBarColor: "#0377a8",
          tabBarIcon: ({ color }) => (
            <Icon name='ios-home' color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="InstructionScreen"
        component={InstructionStackScreen}
        options={{
          tabBarLabel: 'Safety',
          tabBarColor: '#118fb0',
          tabBarIcon: ({ color }) => (
            <Icon name='ios-thumbs-up' color={color} size={26} />
          )
        }}
      />

      <Tab.Screen
        name="ExploreScreen"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#1fa6b8',
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
          tabBarColor: '#2fb5c7',
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
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerBackground: () => (
        <LinearGradient
          colors={['#0377a8', '#2fb5c7']}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      ),
    }}>
      <SettingStack.Screen name="Setting" component={SettingScreen}
        options={{
          title: '',
          headerLeft: () => (
            <Icon.Button
              name='ios-menu'
              backgroundColor='transparent'
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
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerBackground: () => (
        <LinearGradient
          colors={['#0377a8', '#2fb5c7']}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      ),
    }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{
        title: '',
        headerLeft: () => (
          <Icon.Button name="ios-menu"
            size={25}
            backgroundColor="transparent"
            onPress={() => (navigation.openDrawer())} />
        )
      }} />
    </HomeStack.Navigator>
  )
}

const InstructionStackScreen = ({ navigation }) => {
  return (
    <InstructionStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#0077b6',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerBackground: () => (
        <LinearGradient
          colors={['#0377a8', '#2fb5c7']}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      ),
    }}>
      <InstructionStack.Screen name="ProfileScreen" component={ProfileScreen} options={{
        title: '',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="transparent"
            onPress={() => (navigation.openDrawer())} />
        )
      }} />
    </InstructionStack.Navigator>
  )
}

const ExploreStackScreen = ({ navigation }) => {
  return (
    <ExploreStack.Navigator screenOptions={{
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerBackground: () => (
        <LinearGradient
          colors={['#0377a8', '#2fb5c7']}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      ),
    }}>
      <ExploreStack.Screen
        name="ExploreScreen" component={ExploreScreen}
        options={{
          title: '',
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="transparent"
              onPress={() => navigation.openDrawer()} />
          )
        }}
      ></ExploreStack.Screen>
      <ExploreStack.Screen
        name="DetailScreen" component={DetailScreen}
      ></ExploreStack.Screen>
    </ExploreStack.Navigator>
  )
}

export default TabBar;
