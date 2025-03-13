import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";

interface FriendSectionProps {
  friendProfileLen: number;
  onPress: () => void;
  isOpen: boolean;
}
const FriendSection = (props: FriendSectionProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Text style={{ color: "grey" }}>친구 {props.friendProfileLen}</Text>
      <TouchableOpacity onPress={props.onPress}>
        <MaterialIcons name={props.isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color="grey" />
      </TouchableOpacity>
    </View>
  );
};

export default FriendSection