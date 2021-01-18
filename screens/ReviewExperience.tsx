// ./screens/ReviewExperience.js

import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ReviewExperience = () => {
  return (
    <View style={styles.center}>
      <Text>This is where you review an experience</Text>
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

export default ReviewExperience;