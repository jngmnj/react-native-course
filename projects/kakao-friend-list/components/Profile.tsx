import { ProfileType } from "@/assets/data";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface MyProfileProps extends ProfileType {
  size?: "small" | "large";
}
export default (props: MyProfileProps) => {

  return (
    <View style={styles.ProfileContainer}>
      <View
        style={
          props.size == "small" ? styles.smallImageArea : styles.largeImageArea
        }
      >
        {/* require(props.source): 동적매핑이 안된다고함 */}
        {/* images[props.source] */}
        <Image source={props.source} style={{ width: 50, height: 50 }} />
      </View>
      <View style={styles.textArea}>
        <Text
          style={{
            fontWeight: "bold",
            marginBottom: 4,
            fontSize: props.size == "small" ? 14 : 16,
          }}
        >
          {props.name}
        </Text>
        <Text style={{ fontSize: 12, color: "gray" }}>
          {props.introduction}
        </Text>
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
  },
  largeImageArea: {
    width: 50,
    height: 50,
    borderRadius: 20,
    overflow: "hidden",
  },
  smallImageArea: {
    width: 40,
    height: 40,
    borderRadius: 16,
    overflow: "hidden",
  },
  textArea: {
    marginLeft: 12,
  },
});
