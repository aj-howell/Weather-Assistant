import { Stack } from "expo-router";
// import 'expo-dev-client';

export default function TabsLayout () {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
