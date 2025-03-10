import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const InputBox = (props) => {
  return (
    <View style={styles.flex}>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        style={styles.input}
      />
      <Button title="초기화" onPress={props.onReset} />
    </View>
  );
};

// custom hook
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const resetValue = () => setValue(initialValue);

  return {
    value,
    setValue,
    resetValue,
  };
};

const CustomHook = () => {
  // const [name, setName] = useState("");
  // const output = useInput("");
  // const name = output.value;
  // const setName = output.setValue;
  // const resetName = output.resetValue;

	// refactored	구조분해할당
  const {
    value: name,
    setValue: setName,
    resetValue: resetName,
  } = useInput("");
  const {
    value: city,
    setValue: setCity,
    resetValue: resetCity,
  } = useInput("");
  const {
    value: age,
    setValue: setAge,
    resetValue: resetAge,
  } = useInput("");

  // const [age, setAge] = useState(0);
  // const [city, setCity] = useState("");

  return (
    <View style={styles.container}>
      <InputBox
        value={name}
        onChangeText={setName}
        placeholder="이름을 입력하세요"
        onReset={resetName}
      />
      <InputBox
        value={age}
        onChangeText={setAge}
        placeholder="나이를 입력하세요"
        onReset={resetAge}
      />
      <InputBox
        value={city}
        onChangeText={setCity}
        placeholder="도시을 입력하세요"
        onReset={resetCity}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  flex: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "90%",
    padding: "10px",
    margin: "10px",
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default CustomHook;
