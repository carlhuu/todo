import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TaskItemProps {
  task: {
    id: string;
    text: string;
    completed: boolean;
  };
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggle,
  onDelete,
}) => {
  return (
    <View style={styles.taskItem}>
      <TouchableOpacity
        style={styles.circleContainer}
        onPress={() => onToggle(task.id)}
        accessibilityRole="button"
        accessibilityLabel={
          task.completed ? "Mark as incomplete" : "Mark as complete"
        }
      >
        <View style={[styles.circle, task.completed && styles.circleCompleted]}>
          {task.completed && <View style={styles.innerCircle} />}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.taskTextContainer}
        onPress={() => onToggle(task.id)}
      >
        <Text
          style={[styles.taskText, task.completed && styles.completedTaskText]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {task.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(task.id)}
        accessibilityRole="button"
        accessibilityLabel="Delete task"
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const CIRCLE_SIZE = 24;

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  circleContainer: {
    marginRight: 12,
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    borderWidth: 2,
    borderColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    position: "relative",
  },
  circleCompleted: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },
  innerCircle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: CIRCLE_SIZE / 2,
    height: CIRCLE_SIZE / 2,
    borderRadius: CIRCLE_SIZE / 4,
    backgroundColor: "white",
    transform: [
      { translateX: -(CIRCLE_SIZE / 4) },
      { translateY: -(CIRCLE_SIZE / 4) },
    ],
  },
  taskTextContainer: {
    flex: 1,
    justifyContent: "center",
    minHeight: CIRCLE_SIZE,
    paddingVertical: 2,
  },
  taskText: {
    fontSize: 16,
    color: "#222",
  },
  completedTaskText: {
    color: "#888",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 6,
    marginLeft: 10,
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
