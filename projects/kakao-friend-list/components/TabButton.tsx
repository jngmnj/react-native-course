import { Fontisto, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface TabButtonProps {
  isSelected: boolean;
  onPress: () => void;
  activeIoniconName?: keyof typeof Ionicons.glyphMap;
  inactiveIoniconName?: keyof typeof Ionicons.glyphMap;
  activeFontistoName?: keyof typeof Fontisto.glyphMap;
  inactiveFontistoName?: keyof typeof Fontisto.glyphMap;
  children?: React.ReactNode;
}
const TabButton = ({
  isSelected,
  activeIoniconName,
  inactiveIoniconName,
  activeFontistoName,
  inactiveFontistoName,
  onPress,
  children,
}: TabButtonProps) => {
  const [selectedTabId, setSelectedTabId] = useState(0);

  const insets = useSafeAreaInsets();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ paddingBottom: insets.bottom,}}
    >
      {activeFontistoName && inactiveFontistoName ? (
        <Fontisto
          name={isSelected ? activeFontistoName : inactiveFontistoName}
          size={24}
          color="grey"
        />
      ) : (
        <Ionicons
          name={isSelected ? activeIoniconName : inactiveIoniconName}
          size={24}
          color="grey"
        />
      )}
      <Text style={{ fontSize: 0,width:0, height:0, overflow: "hidden" }}>{children}</Text>
    </TouchableOpacity>
  );
};

export default TabButton