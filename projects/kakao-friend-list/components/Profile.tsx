import { ProfileType } from "@/assets/data";
import React from "react";
import { Image, Text, View } from "react-native";

interface MyProfileProps extends ProfileType {
  isMe: boolean;
}
export default ({ isMe, source, name, introduction }: MyProfileProps) => {
  const size = isMe ? 50 : 40;

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={source} style={{ width: size, height: size, borderRadius: size * 0.4 }} />
      <View style={{ justifyContent: "center", marginLeft: 12 }}>
        <Text style={{fontWeight: isMe ? 700 : 500, fontSize: isMe ? 16 : 15,}}>{name}</Text>
        {!!introduction && ( // introduction이 존재할 때만 렌더링(falsy값이면 렌더링 안함)
          <View>
            <View style={{ height: isMe ? 6 : 2 }} />
            <Text style={{ fontSize: isMe ? 12 : 11, color: "gray" }}>{introduction}</Text>
          </View>
        )}
      </View>
    </View>
  );
};