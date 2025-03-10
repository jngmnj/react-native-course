import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";

const Header = (props: any) => <Text>{props.title}</Text>;
const MyProfile = () => (
  <Text>
    <Profile
      uri="https://i.namu.wiki/i/pKp6bM6ovVkqzTlwj5lkWjCfyLCITAU3bP5chwJc7TcsgEh9dJxNGbAUfnTTlFsjAzmIG586bMk56Oa5OgHEZw.webp"
      name="카리나"
      profileSize={64}
    />
  </Text>
);
const Profile = (props: any) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{
          uri: props.uri
        }}
        style={{
          width: props.profileSize,
          height: props.profileSize,
        }}
      />
      <Text>{props.name}</Text>
    </View>
  );
}
const Division = () => <Text>Division</Text>;
const FriendSection = () => (
  <Text></Text>
);
const FriendList = () => {
  return (
    <View>
      <Profile
        uri="https://i.namu.wiki/i/pKp6bM6ovVkqzTlwj5lkWjCfyLCITAU3bP5chwJc7TcsgEh9dJxNGbAUfnTTlFsjAzmIG586bMk56Oa5OgHEZw.webp"
        name="카리나"
        profileSize={50}
      />
      <Profile
        uri="https://i.namu.wiki/i/pKp6bM6ovVkqzTlwj5lkWjCfyLCITAU3bP5chwJc7TcsgEh9dJxNGbAUfnTTlFsjAzmIG586bMk56Oa5OgHEZw.webp"
        name="카리나"
        profileSize={50}
      />
      <Profile
        uri="https://i.namu.wiki/i/pKp6bM6ovVkqzTlwj5lkWjCfyLCITAU3bP5chwJc7TcsgEh9dJxNGbAUfnTTlFsjAzmIG586bMk56Oa5OgHEZw.webp"
        name="카리나"
        profileSize={50}
      />
      <Profile
        uri="https://i.namu.wiki/i/pKp6bM6ovVkqzTlwj5lkWjCfyLCITAU3bP5chwJc7TcsgEh9dJxNGbAUfnTTlFsjAzmIG586bMk56Oa5OgHEZw.webp"
        name="카리나"
        profileSize={50}
      />
    </View>
  );
}


export default function HomeScreen() {
  return (
    <View>
      <Header title="친구"/>
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
