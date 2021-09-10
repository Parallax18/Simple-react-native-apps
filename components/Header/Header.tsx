import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingVertical: 38,
    backgroundColor: "coral",
  },
  title: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
});
