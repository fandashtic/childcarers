import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const InitTab = createBottomTabNavigator();

import {createStackNavigator} from '@react-navigation/stack';
const InitStack = createStackNavigator();

import Login from './../Pages/Login/Login';

import OurApps from './../Pages/Home/OurApps';
import Centres from './../Pages/Home/Centres';
import Contact from './../Pages/Home/Contact';

const LoginNavigatorr = ({navigation, route}) => {
  return (
    <InitStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <InitStack.Screen name="Login" component={Login} />
    </InitStack.Navigator>
  );
};

const InitNavigator = ({navigation, route}) => {
  return (
    <InitTab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <InitTab.Screen name="Login" component={LoginNavigatorr} />
      <InitTab.Screen name="OurApps" component={OurApps} />
      <InitTab.Screen name="Centres" component={Centres} />
      <InitTab.Screen name="Contact" component={Contact} />
    </InitTab.Navigator>
  );
};

export default InitNavigator;
