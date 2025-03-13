import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
import { useState } from "react";
import { StyleSheet } from "react-native";
import TabButton from "../../components/TabButton";

// Defining the layout of the custom tab navigator
export default function Layout() {
  const [selectedTabId, setSelectedTabId] = useState(0);
  
  
  return (
    <Tabs>
      <TabSlot style={{ flex: 1, backgroundColor: "#fff"}} />
      <TabList
        style={{
          width: "100%",
          backgroundColor: "white",
          height: 70,
          flexDirection: "row",
          justifyContent: "space-around",
          borderTopWidth: 0.5,
          borderTopColor: "lightgrey",
        }}
      >
        <TabTrigger name="home" href="/" style={styles.TabTrigger}>
          <TabButton
            isSelected={selectedTabId === 0}
            onPress={() => setSelectedTabId(0)}
            activeIoniconName={"person"}
            inactiveIoniconName={"person-outline"}
          >
            Home
          </TabButton>
        </TabTrigger>

        <TabTrigger
          name="article"
          href="/(tabs)/chat"
          style={styles.TabTrigger}
        >
          <TabButton
            isSelected={selectedTabId === 1}
            onPress={() => setSelectedTabId(1)}
            activeIoniconName={"chatbubble-sharp"}
            inactiveIoniconName={"chatbubble-outline"}
          >
            Chat
          </TabButton>
        </TabTrigger>
        <TabTrigger
          name="article"
          href="/(tabs)/explore"
          style={styles.TabTrigger}
        >
          <TabButton
            isSelected={selectedTabId === 2}
            onPress={() => setSelectedTabId(2)}
            activeFontistoName={"hashtag"}
            inactiveFontistoName={"hashtag"}
          >
            explore
          </TabButton>
        </TabTrigger>
        <TabTrigger
          name="article"
          href="/(tabs)/more"
          style={styles.TabTrigger}
        >
          <TabButton
            isSelected={selectedTabId === 3}
            onPress={() => setSelectedTabId(3)}
            activeIoniconName={"ellipsis-horizontal"}
            inactiveIoniconName={"ellipsis-horizontal-outline"}
          >
            more
          </TabButton>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}
const styles = StyleSheet.create({
  TabTrigger: {
    alignItems: "center",
    justifyContent: "center",
  }
});