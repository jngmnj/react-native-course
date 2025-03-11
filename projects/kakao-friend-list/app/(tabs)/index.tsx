import { friendProfiles, myProfile } from "@/assets/data";
import FriendList from "@/components/FriendList";
import FriendSection from "@/components/FriendSection";
import Header from '@/components/Header';
import Margin from "@/components/Margin";
import Profile from "@/components/Profile";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Division from '../../components/Division';

export default function HomeScreen() {
  const [isFriendSectionOpen, setIsFriendSectionOpen] = useState(true);

  return (
    <View style={styles.container}>
      <Header />

      {/* 컴포넌트별 간격 지정시 명시적으로 height주는게 좋음 */}
      <Margin height={6} />

      <Profile
        source={myProfile.source}
        name={myProfile.name}
        introduction={myProfile.introduction}
      />

      <Margin height={10} />
      <Division />
      <Margin height={10} />

      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPress={() => setIsFriendSectionOpen(!isFriendSectionOpen)}
        isOpen={isFriendSectionOpen}
      />
      {/* isOpen이 true일 때만 FriendList 컴포넌트가 보이도록 설정 */}
      {isFriendSectionOpen && <FriendList friendProfiles={friendProfiles} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 20,
  },
});
