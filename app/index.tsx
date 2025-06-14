import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import { Task } from "./types";

export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  const addTask = () => {
    if (newTaskText.trim()) {
      setTasks([
        {
          id: Date.now().toString(),
          text: newTaskText.trim(),
          completed: false,
        },
        ...tasks,
      ]);
      setNewTaskText("");
    }
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Sort tasks: incomplete first, completed last
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1;
  });

  return (
    <View style={styles.container}>
      <TaskInput
        value={newTaskText}
        onChangeText={setNewTaskText}
        onAddTask={addTask}
      />
      <TaskList
        tasks={sortedTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
});
