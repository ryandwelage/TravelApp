// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Search from "../screens/Search";
import NewExperience from "../screens/NewExperience";
import ReviewExperience from "../screens/ReviewExperience";
import Saved from "../screens/Saved";
import Profile from "../screens/Profile";
import RecRestaurants from "../screens/RecRestaruants";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewExperience" component={NewExperience} />
      <Stack.Screen name="ReviewExperience" component={ReviewExperience} />
      <Stack.Screen name="RecRestaurants" component={RecRestaurants} />
    </Stack.Navigator>
  );
}

const RecStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="NewExperience" component={NewExperience} />
      <Stack.Screen name="RecRestaurants" component={RecRestaurants} />
    </Stack.Navigator>
  );
}
const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}

const SavedStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Saved" component={Saved} />
    </Stack.Navigator>
  );  
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );  
}

export { MainStackNavigator, SearchStackNavigator, SavedStackNavigator, ProfileStackNavigator, RecStackNavigator };