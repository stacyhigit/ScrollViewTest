import { StatusBar } from "expo-status-bar";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentOffset={{ x: 0, y: 500 }}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: "blue" },
            pressed && styles.pressed,
          ]}
          onPressOut={() => console.log("onPressOut")}
          onPress={() => console.log("onPress!")}
          onPressIn={() => console.log("onPressIn")}
        >
          <Text style={styles.text}>test 1</Text>
        </Pressable>
      </ScrollView>
      <ScrollView>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: "blue" },
            pressed && styles.pressed,
          ]}
          onPressOut={() => console.log("onPressOut")}
          onPress={() => console.log("onPress!")}
          onPressIn={() => console.log("onPressIn")}
        >
          <Text style={styles.text}>test 2</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 100,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
