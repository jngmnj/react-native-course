import React, { useState } from "react";
import { Button, StyleSheet, Switch, Text, TextInput, View } from "react-native";

const Component = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [name, setName] = useState("");

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />

      <Text>---------</Text>
      <Switch value={isOn} onValueChange={setIsOn} />
      <Text>{isOn ? "ON" : "OFF"}</Text>

      <Text>---------</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} />
      <Text>{name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    padding: "10px",  
    margin: "10px",
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default Component;
