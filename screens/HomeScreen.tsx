import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {}

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#535", flex: 1 }}>
      <Text style={{ color: "white" }}>HomeScreen</Text>

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
