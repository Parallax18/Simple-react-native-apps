import React from "react";
import { Text, View, StyleSheet } from "react-native";

const SandBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "#333",
  },
  boxOne: {
    backgroundColor: "violet",
    padding: 10,
  },
  boxTwo: {
    backgroundColor: "gold",
    padding: 20,
  },
  boxThree: {
    backgroundColor: "coral",
    padding: 30,
  },
  boxFour: {
    backgroundColor: "purple",
    padding: 40,
  },
});

export default SandBox;
