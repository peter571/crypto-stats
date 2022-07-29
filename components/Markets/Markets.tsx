import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Coins from "../Coins/Coins";
import Nfts from "../Nfts/Nfts";

export default function Markets() {
  const [currentId, setCurrentId] = useState("coins");

  return (
    <View>
      <Text style={styles.title}>Markets</Text>
      <View style={styles.tabsWrapper}>
      <Text onPress={() => setCurrentId("coins")}>Coins</Text>
      <Text onPress={() => setCurrentId("nfts")}>Nfts</Text>
      </View>
      {currentId === "coins" ? <Coins /> : <Nfts />}
    </View>
  );
}

const styles = StyleSheet.create({
  tabsWrapper: {
    flexDirection: 'row'
  },
  title: {
    marginTop: 20
  }
})
