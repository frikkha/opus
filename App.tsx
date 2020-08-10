import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, Vibration } from 'react-native';
import { Accelerometer } from 'expo-sensors';


const THRESHOLD = 150;

export default function App() {

  const [value, setValue] = useState(5);
  const [path, setPath] = useState(require('./img/5.png'));
  const [isStarted, setIsStarted] = useState<Boolean>(false);



  let rollDice = ()=> {
    setValue(Math.floor( Math.random() * 6) + 1)
    getPath2()
    Vibration.vibrate(10);
  }

  const addListener = (handler: any) => {
    let last_x: number, last_y: number, last_z:number ;
    let lastUpdate = 0;
    Accelerometer.addListener(accelerometerData => {
        let { x, y, z } = accelerometerData;
        let currTime = Date.now();
        if ((currTime - lastUpdate) > 100) {
            let diffTime = (currTime - lastUpdate);
            lastUpdate = currTime;
            let speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
            if (speed > THRESHOLD) {
                handler();
            }
            last_x = x;
            last_y = y;
            last_z = z;
        }
    });
}
  

  let getPath2 = () => {
      if (value === 1){
        setPath(require('./img/1.png'))
      } else if (value === 2){
        setPath(require('./img/2.png'))
      } else if (value === 3) {
        setPath(require('./img/3.png'))
      } else if (value === 4) {
        setPath(require('./img/4.png'))
      } else if (value === 5){
        setPath(require('./img/5.png'))
      } else {
        setPath(require('./img/6.png'))
    }
  }

  let playOpus = () =>  {

  }

  useEffect (() => {
    addListener( () => {
      rollDice()
    })
  })  
 
  return (
    ! isStarted ? 
    <View style={styles.startButton}>
      <TouchableOpacity>
        <Button title={'Start'} onPress={ () => {
          setIsStarted(true)
          playOpus()
          }}/>
    
      </TouchableOpacity>

    </View>
    :
    <View style={styles.container}>
      <TouchableOpacity onPress={rollDice}>
        <Image 
                style={styles.image}
                source={path}
                />    
      </TouchableOpacity>  

    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200
  },
  startButton: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  }

});
