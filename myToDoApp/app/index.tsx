import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");


  const addTask = () => {
    if (task.trim().length === 0) return;
    setTasks([...tasks, { id: Date.now().toString(), text: task, completed: false }]);
    setTask("");
  };


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };


  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📋 To-Do List</Text>


      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <AntDesign name="pluscircle" size={30} color="green" />
        </TouchableOpacity>
      </View>

      
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <TouchableOpacity onPress={() => toggleTask(item.id)}>
              <MaterialIcons
                name={item.completed ? "check-circle" : "radio-button-unchecked"}
                size={24}
                color={item.completed ? "green" : "gray"}
              />
            </TouchableOpacity>
            <Text style={[styles.taskText, item.completed && styles.completedTask]}>
              {item.text}
            </Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <MaterialIcons name="delete" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f9fa" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  inputContainer: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  input: { flex: 1, borderWidth: 1, padding: 10, borderRadius: 5, borderColor: "#ddd" },
  addButton: { marginLeft: 10 },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    elevation: 2,
  },
  taskText: { flex: 1, fontSize: 16, marginLeft: 10 },
  completedTask: { textDecorationLine: "line-through", color: "gray" },
});
