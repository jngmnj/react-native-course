import { myProfile } from "@/assets/data";
import Header from '@/components/Header';
import Margin from "@/components/Margin";
import MyProfile from '@/components/MyProfile';
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      
      {/* 컴포넌트별 간격 지정시 명시적으로 height주는게 좋음 */}
      <Margin height={6} />

      <MyProfile 
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 8,
  },
  
});
