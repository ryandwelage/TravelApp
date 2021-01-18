// ./screens/Home.js

import React from "react";
import { View, Button, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Home = ( { navigation} ) => {
  return (
  <>
    <React.Fragment>
       <View style={styles.Container1}>
       <TouchableOpacity>
           <View style={styles.scheduleButton} >
           <Text style={styles.scheduleButtonText}>Sunday</Text>
           <Text style={styles.dateText}>17th</Text>
           </View>
        </TouchableOpacity>
       </View>
    </React.Fragment>

    <React.Fragment>
    <View style={styles2.Container2}>
       <TouchableOpacity>
           <View style={styles2.activityButton} >
           <Text style={styles2.activityButtonText}>Friend activity</Text>
           </View>
        </TouchableOpacity>
        </View>
     </React.Fragment>
    
    <React.Fragment>
       <View style={styles3.Container3}>

        <TouchableOpacity onPress={() => navigation.navigate("ReviewExperience")}>
           <View style={styles3.button1} >
           <Image
             source={require('../Images/istockphoto-1146671798-612x612.jpg')}
             style={styles3.ImageIconStyle2} 
             />
           <Text style={styles3.buttonText1}>Review a previous experience</Text>
           </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("NewExperience")}>
           <View style={styles3.button2} >
           <Image
             source={require('../Images/pexels-photo-1823681.jpeg')}
             style={styles3.ImageIconStyle3}
             />
           <Text style={styles3.buttonText2}>Plan your next experience</Text>
           </View>
        </TouchableOpacity>

       </View>
     </React.Fragment>
  </>
  );
};

const styles = StyleSheet.create({
 
  Container1: {
    paddingTop: 20,
    //justifyContent: 'center',
    alignItems: 'center',
    },
  
    scheduleButton: {
      width: 375,
      height: 175,
      marginBottom: 10,
      borderRadius: 10,
      backgroundColor: '#13CDD4'  
   },
  
   scheduleButtonText: {
    textAlign: 'left',
    paddingTop: 10,
    paddingLeft: 20,
    color: 'white'
   },

   dateText: {
    textAlign: 'left',
    paddingTop: 2,
    paddingLeft: 20,
    color: 'white',
    fontSize: 30
   }
  

  });

  const styles2 = StyleSheet.create({
 
    Container2: {
      paddingTop: 20,
      //justifyContent: 'center',
      alignItems: 'center'
      },  
    
      activityButton: {
        width: 375,
        height: 250,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#414BB2'  
     },
    
     activityButtonText: {
      textAlign: 'left',
      paddingTop: 10,
      paddingLeft: 20,
      color: 'white'
     }
    });

const styles3 = StyleSheet.create({
   
  Container3: {
   // flex: 2,
   paddingBottom: 20,
   flexDirection: 'row',
   justifyContent: 'space-between',
   paddingTop: 20,
   paddingLeft: 20,
   paddingRight: 20,
   alignItems: 'center'
   },
   button1: {
     width: 175,
     height: 175,
     marginBottom: 30,
     borderRadius: 10,
     //alignItems: 'center',
     backgroundColor: '#DA0163'
   },
   buttonText1: {
     textAlign: 'left',
     paddingTop: 10,
     paddingLeft: 20,
     color: 'white'
   },
   ImageIconStyle2: {
     height: 120,
     width: 175,
     borderTopRightRadius: 10,
     borderTopLeftRadius: 10,
  },
   button2: {
     width: 175,
     height: 175,
     marginBottom: 30,
     borderRadius: 10,
     //alignItems: 'center',
     backgroundColor: '#F24726'
   },
   buttonText2: {
     textAlign: 'left',
     paddingTop: 10,
     paddingLeft: 20,
     
     color: 'white'
   },
   ImageIconStyle3: {
     height: 120,
     width: 175,
     borderTopRightRadius: 10,
     borderTopLeftRadius: 10,
   }
  });

export default Home;