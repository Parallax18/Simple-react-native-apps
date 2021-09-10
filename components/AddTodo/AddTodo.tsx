import React, { useState, FC } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

const AddTodo: FC<{ submithandler: Function }> = ({ submithandler }) => {
  const [text, setText] = useState("");
  const changeHandler = (val: string) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submithandler(text)}
        title="add todo"
        color="coral"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default AddTodo;
