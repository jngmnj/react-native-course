import { friendProfiles, myProfile } from "@/assets/data";
import Division from "@/components/Division";
import FriendSection from "@/components/FriendSection";
import Header from "@/components/Header";
import Margin from "@/components/Margin";
import Profile from "@/components/Profile";
import { useState } from "react";
import { FlatList, View } from "react-native";

export default function HomeScreen() {
  const [isFriendSectionOpen, setIsFriendSectionOpen] = useState(true);

  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: "#fff" }}>
      <Header />

      {/* 컴포넌트별 간격 지정시 명시적으로 height주는게 좋음 */}
      <Margin height={6} />

      <Profile
        source={myProfile.source}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMe={true}
      />

      <Margin height={10} />
      <Division />
      <Margin height={10} />

      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPress={() => setIsFriendSectionOpen(!isFriendSectionOpen)}
        isOpen={isFriendSectionOpen}
      />
      <Margin height={5} />
    </View>
  );
  const ListFooterComponent = () => <Margin height={10} />;
  const ItemSeparatorComponent = () => <Margin height={10} />;
  const renderItem = ({ item }: any) => (
    <View>
      <Profile
        name={item.name}
        source={item.source}
        introduction={item.introduction}
        isMe={false}
      />
    </View>
  );
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <FlatList
        data={isFriendSectionOpen ? friendProfiles : []}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        stickyHeaderIndices={[0]} // ListHeaderComponent를 고정시키는 속성
        showsVerticalScrollIndicator={false}
      ></FlatList>
    </View>
  );
}