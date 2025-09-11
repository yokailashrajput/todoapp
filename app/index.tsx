import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <LinearGradient
      colors={[
        'rgba(11, 17, 151, 1)',
        'rgba(4, 8, 121, 0.23)',
        'rgba(7, 12, 124, 0)'
      ]}
      start={{ x: 0, y: 0}}   // bottom-left
      end={{ x: 0, y: 2.5 }}     // top-right
      style={styles.container}
    >
      <View style={[styles.borderc,styles.appbar ]}>
        <View style={styles.texttodo}></View>
        <View></View>
      </View>
      <View style={[styles.borderc,styles.datetime ]}></View>
      <View style={[styles.borderc,styles.nvbar]}></View>
      <View style={[styles.borderc,styles.todos]}></View>
      <View style={[styles.borderc,styles.addnew]}></View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',   // center vertically
    alignItems: 'center',       // center horizontally
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  texttodo:{
    borderColor:"red",
    borderWidth:2,
    height:50,
    width:50,
  },
  appbar:{
    height:135,
    backgroundColor:"black",
  },
  datetime:{
    height:120,
  },
  nvbar:{
    height:120,
    
  },
  todos:{
    height:600,
    
  },
  addnew:{
    height:120,

  },
  borderc:{
    borderColor:"red",
    borderWidth:2, 
    height:100,
    width:525,
  }
});
