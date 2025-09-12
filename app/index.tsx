import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <LinearGradient
      colors={[
        "rgba(11, 17, 151, 1)",
        "rgba(4, 8, 121, 0.23)",
        "rgba(7, 12, 124, 0)",
      ]}
      start={{ x: 0, y: 0 }} // bottom-left
      end={{ x: 0, y: 2.5 }} // top-right
      style={styles.container}
    >
      <View style={[styles.borderc, styles.appbar]}>
        <View style={[styles.ajcc, styles.texttodo]}>
          <Text style={styles.maintext}>TODO TASK</Text>
        </View>
        <View style={styles.calender}>
          <AntDesign
            name="calendar"
            size={24}
            color="White"
            style={styles.calicon}
          />
        </View>
      </View>
      <View style={[styles.borderc, styles.ajcc, styles.datetime]}>
        <View style={[styles.todaydate, styles.ajcc]}>
          <Text style={{ fontSize: 40 }}>Date</Text>
        </View>
        <View style={[styles.ajcc, styles.time]}>
          <Text style={{ fontSize: 40 }}>Time</Text>
        </View>
      </View>
      <View style={[styles.borderc, styles.ajcc, styles.nvbar]}>
        <View style={[styles.ajcc, styles.allcontiner]}>
          <View style={[styles.ajcc, styles.all]}>
            <Feather name="list" size={26} color="black" />
            <Text style={{ fontSize: 13 }}>ALL</Text>
          </View>
        </View>
        <View style={[styles.ajcc, styles.donecontiner]}>
          <View style={[styles.ajcc, styles.all]}>
            <MaterialIcons name="done" size={26} color="black" />
            <Text style={{ fontSize: 13 }}>Complate</Text>
          </View>
        </View>
      </View>
      <View style={[styles.borderc, styles.todos]}></View>
      <View style={[styles.borderc, styles.ajcc, styles.addnew]}>
        <View style={[styles.ajcc,styles.addnewbtn]}>

        <FontAwesome6 name="add" size={55} color="white"  />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // center horizontally
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  appbar: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    height: 135,
    backgroundColor: "black",
  },
  texttodo: {
    // borderColor: "red",
    // borderWidth: 2,
    height: 100,
    width: 272,
  },
  maintext: {
    color: "white",
    fontSize: 45,
    fontWeight: "bold",
  },
  calender: {
    // borderColor: "red",
    // borderWidth: 2,
    height: 100,
    width: 250,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  calicon: {
    marginRight: 20,
    fontSize: 50,
    color: "white",
  },
  datetime: {
    flexDirection: "row",
    height: 120,
  },
  todaydate: {
    // borderColor: "red",
    // borderWidth: 2,
    height: 100,
    width: 250,
    fontSize: 40,
  },
  time: {
    // borderColor: "red",
    // borderWidth: 2,
    height: 100,
    width: 250,
  },
  nvbar: {
    height: 120,
    flexDirection: "row",
  },
  allcontiner: {
    // borderColor: "red",
    // borderWidth: 2,
    height: 100,
    width: 250,
  },
  all: {
    // borderColor: "red",
    // borderWidth: 2,
    height: 100,
    width: 100,
    flexDirection: "column",
  },
  donecontiner: {
    // borderColor: "red",
    // borderWidth: 2,
    height: 100,
    width: 250,
  },
  todos: {
    height: 600,
  },
  addnew: {
    height: 120,
  },
  addnewbtn:{
    // borderColor: "red",
    // borderWidth: 2,
    height: 85,
    width:85,
    borderRadius:100,
    backgroundColor:'#2A2B54'
  },
  borderc: {
    // borderColor: "red",
    // borderWidth: 2,
    height: 100,
    width: 525,
  },
  ajcc: {
    alignItems: "center",
    justifyContent: "center",
  },
});
