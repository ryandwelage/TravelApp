// ./screens/About.js

import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const NewExperience = ( {navigation} ) => {
  return (
  <>
    <React.Fragment>
       <View style={styles.container}>

        <TouchableOpacity onPress={() => navigation.navigate("RecRestaurants")}>
           <View style={styles.button} >
           <Text style={styles.buttonText}>Restaurant & Bars</Text>
           </View>
        </TouchableOpacity>

        <TouchableOpacity>
           <View style={styles.button} >
           <Text style={styles.buttonText}>Tours & Attractions</Text>
           </View>
        </TouchableOpacity>

        <TouchableOpacity>
           <View style={styles.button} >
           <Text style={styles.buttonText}>Sports & Recreation</Text>
           </View>
        </TouchableOpacity>

        <TouchableOpacity>
           <View style={styles.button} >
           <Text style={styles.buttonText}>Music, Comedy & Nightlife</Text>
           </View>
        </TouchableOpacity>

        <TouchableOpacity>
           <View style={styles.button} >
           <Text style={styles.buttonText}>Shopping</Text>
           </View>
        </TouchableOpacity>

        <TouchableOpacity>
           <View style={styles.button} >
           <Text style={styles.buttonText}>Theatre & Performing Arts</Text>
           </View>
        </TouchableOpacity>

       </View>
     </React.Fragment>
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 300,
    alignItems: 'center',
    backgroundColor: '#F24726',
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  }
});



export default NewExperience;