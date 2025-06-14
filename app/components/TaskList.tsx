import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Task } from "../types";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggle,
  onDelete,
}) => {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  const ListHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        {totalTasks === 0
          ? "No tasks yet"
          : `${completedTasks} of ${totalTasks} tasks completed`}
      </Text>
    </View>
  );

  const ListEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>
        Add your first task using the input above!
      </Text>
    </View>
  );

  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem task={item} onToggle={onToggle} onDelete={onDelete} />
      )}
      keyExtractor={(item) => item.id}
      style={styles.list}
      ListHeaderComponent={ListHeader}
      ListEmptyComponent={ListEmpty}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listContent: {
    flexGrow: 1,
  },
  header: {
    paddingVertical: 10,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});
