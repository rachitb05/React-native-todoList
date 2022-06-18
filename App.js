import React, { useState } from "react";
import { Keyboard, ScrollView, StyleSheet, Text, View } from "react-native";
import TaskInputField from "./components/TaskInputField";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const handleChange = (index) => {
    let newArr=[...tasks];
    newArr[index].check=!newArr[index].check;
    setTasks(newArr);
};
  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, { text: task, check: false }]);
    Keyboard.dismiss();
  };

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      <ScrollView style={styles.scrollView}>
        {tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <TaskItem
                index={index}
                task={task.text}
                deleteTask={() => deleteTask(index)}
                check={task.check}
                setTask={handleChange}
              />
            </View>
          );
        })}
      </ScrollView>
      <TaskInputField addTask={addTask} />
    </View>
  );
      }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C0D6DF",
  },
  heading: {
    color: "#166088",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
});
  
