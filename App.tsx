import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AddTodo from "./components/AddTodo/AddTodo";
import Header from "./components/Header/Header";
import TodoItem from "./components/TodoItem/TodoItem";

export default function App() {
  const [todos, settodos] = useState([
    { text: "Buy coffee", id: "1" },
    { text: "Create an app", id: "2" },
    { text: "Play on the switch", id: "3" },
  ]);

  const pressHandler = (id: string) => {
    settodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id != id);
    });
  };

  const submitHandler = (text: string) => {
    if (text.length >= 3) {
      settodos((prevTodos) => {
        return [{ text: text, id: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS!", "Todos must be over 3 characters long", [
        {
          text: "Understood",
          onPress: () => {
            console.log("alert closed");
          },
        },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        {/* Header */}
        <Header />
        <View style={styles.content}>
          {/* TODO Form */}
          <AddTodo submithandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TodoItem item={item} presshandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    padding: 40,
    flex: 1,
  },

  list: {
    flex: 1,
    marginTop: 20,
  },
});
