// ./screens/RecRests.js

import React from "react";
import { View, StyleSheet, Text } from "react-native";

const RecRestaurants = () => {
    return (
      <View style={styles.center}>
        <Text>This is where your recommended restaurants will show</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  });



export default RecRestaurants;