import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem: FC<{ item: any; presshandler: any }> = ({
  item,
  presshandler,
}) => {
  return (
    <TouchableOpacity onPress={() => presshandler(item.id)}>
      <View style={styles.item}>
        <Text>{item.text}</Text>
        <MaterialIcons name="delete" size={15} color="#333" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default TodoItem;
