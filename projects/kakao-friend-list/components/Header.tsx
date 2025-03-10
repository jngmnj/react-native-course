import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from "react-native";
// import {  getBottomSpace,  getStatusBarHeight} from "react-native-iphone-x-helper";
// import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from "react-native-safe-area-context";

// const statusBarHeight = getStatusBarHeight(true);
// const bottomSpace = getBottomSpace();

// console.log(`${Platform.OS} statusBarHeight: ${statusBarHeight}`);
// console.log(`${Platform.OS} bottomSpace: ${bottomSpace}`);


interface IconButtonProps {
  // name: string;
  name: keyof typeof Ionicons.glyphMap;
}
const IconButton = (props: IconButtonProps) => {
  return (
    <View style={styles.buttonItem}>
      <Ionicons name={props.name} size={24} color="#000" />
    </View>
  );
};
const Header = () => {
  // safe area insets
  const insets = useSafeAreaInsets();
  return (
    <View style={[{ paddingTop: insets.top }, styles.headerContainer]}>
      <Text style={styles.title}>친구</Text>

      <View style={styles.buttonArea}>
        <IconButton 
          name="search"
        />
        <IconButton 
          name="person-add-outline"
        />
        <IconButton 
          name="musical-notes-outline"
        />
        <IconButton 
          name="settings-outline"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  buttonArea: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonItem: {
    paddingHorizontal: 5,
  }
});

export default Header