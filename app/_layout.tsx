import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "What do you have to do?",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#007AFF" },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 22,
            color: "#fff",
          },
        }}
      />
    </Stack>
  );
}
