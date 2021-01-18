// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import { MainStackNavigator, SearchStackNavigator, SavedStackNavigator, ProfileStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen 
        name="Home" 
        component={MainStackNavigator} 
        options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          }}
        />
    <Tab.Screen 
        name="Search" 
        component={SearchStackNavigator} 
        options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          }}
        />
    <Tab.Screen 
        name="Saved" 
        component={SavedStackNavigator} 
        options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="bookmark" color={color} />,
          }}
        />
    <Tab.Screen 
        name="Profile" 
        component={ProfileStackNavigator} 
        options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="person-circle" color={color} />,
          }}
        />
    </Tab.Navigator>
  );
};

function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
  }

export default BottomTabNavigator;