import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { WebView } from 'react-native-webview';


export default function App() {

  const [value, setValue] = useState(5);
  const [path, setPath] = useState(require('./img/5.png'));
  const [isStarted, setIsStarted] = useState<Boolean>(false);


  let spotify_access = process.env.SPOTIFY_ACCESS_TOKEN
  let yt_link = 'https://www.youtube.com/watch?v=iRA82xLsb_w&feature=youtu.be'

  let rollDice = ()=> {
    setValue(Math.floor( Math.random() * 6) + 1)
    getPath2()
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

  return (
    <View style={styles.container}>
      <WebView
          javaScriptEnabled
          style={{ height: 100, width: 300 }}
          source={{
            html: `
                  <!DOCTYPE html>
                  <html>
                    <body>
                      <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://www.youtube.com/embed/iRA82xLsb_w?autoplay=1"></iframe>
                  </html> 
            `,
          }}
          automaticallyAdjustContentInsets={false}
        />
    </View>
  )
 
//   return (
//     ! isStarted ? 
//     <View style={styles.startButton}>
//       <TouchableOpacity>
//         <Button title={'Start'} onPress={ () => {
//           setIsStarted(true)
//           playOpus()
//           }}/>
    
//       </TouchableOpacity>

//     </View>
//     :
//     <View style={styles.container}>
//       <TouchableOpacity onPress={rollDice}>
//         <Image 
//                 style={styles.image}
//                 source={path}
//                 />    
//       </TouchableOpacity>  
//       <Text> Path: {path} </Text>
//       <Text>Count: {value}</Text>
//     </View>
//     )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100
  },
  startButton: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  }

});
