import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import {KeyScreen, RootStackParamList} from '.';
import HomeScreen from 'src/screens/HomeScreen';
import DetailScreen from 'src/screens/DetailScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const BottomTab = createBottomTabNavigator<RootStackParamList>();

export const BottomTabNavigator: FC = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name={KeyScreen.Home} component={HomeScreen} />
      <BottomTab.Screen name={KeyScreen.Details} component={DetailScreen} />
    </BottomTab.Navigator>
  );
};

const Drawer = createDrawerNavigator<RootStackParamList>();

export const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={KeyScreen.Home} component={HomeScreen} />
      <Drawer.Screen name={KeyScreen.Details} component={DetailScreen} />
    </Drawer.Navigator>
  );
};

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

export const TopTab: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={KeyScreen.Home} component={HomeScreen} />
      <Tab.Screen name={KeyScreen.Details} component={DetailScreen} />
    </Tab.Navigator>
  );
};
