import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Client from "./src/components/Client";
import Logo from "./src/components/Logo";

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <Client />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
