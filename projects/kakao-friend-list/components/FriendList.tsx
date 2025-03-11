import { ProfileType } from "@/assets/data";
import React from "react";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Margin from "./Margin";
import Profile from "./Profile";

interface FriendListProps {
  friendProfiles: ProfileType[];
}

const FriendList = (props: FriendListProps) => {
const insets = useSafeAreaInsets();
  return (
    // scroll인디케이터 안보이게 설정
    <ScrollView
      style={{ width: "100%", paddingBottom: insets.bottom }}
      showsVerticalScrollIndicator={false}
    >
      {props.friendProfiles.map((profile) => (
        <View key={profile.name}>
          <Profile
            name={profile.name}
            source={profile.source}
            introduction={profile.introduction}
            size={"small"}
          />
          <Margin height={10} />
        </View>
      ))}
    </ScrollView>
  );
};

export default FriendList;
