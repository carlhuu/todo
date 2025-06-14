import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface TaskInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onAddTask: () => void;
}

export const TaskInput: React.FC<TaskInputProps> = ({
  value,
  onChangeText,
  onAddTask,
}) => {
  const handleSubmit = () => {
    if (value.trim()) {
      onAddTask();
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Add a new task..."
        placeholderTextColor="#666"
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
      />
      <TouchableOpacity
        style={[styles.addButton, !value.trim() && styles.addButtonDisabled]}
        onPress={handleSubmit}
        disabled={!value.trim()}
      >
        <Text
          style={[
            styles.addButtonText,
            !value.trim() && styles.addButtonTextDisabled,
          ]}
        >
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  addButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  addButtonDisabled: {
    backgroundColor: "#ccc",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  addButtonTextDisabled: {
    color: "#666",
  },
});
