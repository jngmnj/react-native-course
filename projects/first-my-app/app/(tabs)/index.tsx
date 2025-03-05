import { StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const Header = () => (
  <ThemedView>
    <HelloWave />
  </ThemedView>
);
const MyProfile = () => (
  <ThemedView>
    <ThemedText>My Profile</ThemedText>
  </ThemedView>
);
const Division = () => (
  <ThemedView>
    <ThemedText>Division</ThemedText>
  </ThemedView>
);
const FriendSection = () => (
  <ThemedView>
    <ThemedText>Friend Section</ThemedText>
  </ThemedView>
);
const FriendList = () => (
  <ThemedView>
    <ThemedText>Friend List</ThemedText>
  </ThemedView>
);
export default function HomeScreen() {
  return (
    <View>
      <Header />
      <MyProfile />
      <Division />
      <FriendSection />
      <FriendList />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
