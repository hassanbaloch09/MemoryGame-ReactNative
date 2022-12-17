import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MemoryGame from "./MemoryGame/MemoryGame";

export default function App() {
  return <MemoryGame />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
