import React from 'react';
import { StyleSheet, View, Image } from 'react-native';


export default function Dice(value: any) {




  return (
    <View style={styles.container}>
        <Image 
                style={styles.image}
                source={require(`./img/6.png`)}
                />    
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50
      }
  });
  
