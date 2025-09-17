import Entypo from "@expo/vector-icons/Entypo";
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
        <Entypo name="arrow-left" size={24} color="White"  />m
        <Text style={styles.maintext}>Add Task</Text>
        </View>
    </View>
</LinearGradient>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    // backgroundColor: "#fff",
},
appbar: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    height: 135,
    backgroundColor: "black",
},
borderc: {
    borderColor: "red",
    borderWidth: 2,
    height: 100,
    width: 525,
},
texttodo: {
    borderColor: "red",
    borderWidth: 2,
    height: 100,
    width: 400,
},
ajcc: {
    alignItems: "center",
    justifyContent: "center",
},
maintext: {
    color: "white",
    fontSize: 45,
    fontWeight: "bold",
},
});
