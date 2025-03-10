import React from 'react';
import { StyleSheet, View } from "react-native";
// import StateWithClass from './StateWithClassComponent';
import CustomHook from "@/hooks/customHook.js";
import StateWithFunctional from "./StateWithFunctionalComponent.js";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <StateWithClass /> */}
      <StateWithFunctional />
      <CustomHook />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
