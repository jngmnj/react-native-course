
import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";

interface MyProfileProps {
    uri: string;
    name: string;
    introduction: string;
}
export default (props: MyProfileProps) => {
  return (
    <View style={styles.ProfileContainer}>
    <View style={styles.ImageArea}>
     <Image source={{ uri: props.uri }} style={{ width: 50, height: 50 }} />
    </View>
      <View style={styles.textArea}>
        <Text style={{fontWeight: "bold", fontSize: 16}}>{props.name}</Text>
        <Text style={{fontSize: 12, color: "gray"}}>{props.introduction}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ProfileContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    // paddingVertical: 10,
    paddingHorizontal: 20,  
  },
  ImageArea: {
    width: 50,
    height: 50,
    borderRadius: 20,
    overflow: "hidden",
  },
  textArea: {
    marginLeft: 12,
  }
});

