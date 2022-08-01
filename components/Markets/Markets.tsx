import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Coins from "../Coins/Coins";
import Nfts from "../Nfts/Nfts";
import { FONTS } from "../../constants";

export default function Markets() {
  const [currentId, setCurrentId] = useState("coins"); 

  return (
    <View style={styles.marketWrapper}>
      <Text style={styles.title}>Markets</Text>
      <View style={styles.tabsWrapper}>
        <Text
          onPress={() => setCurrentId("coins")}
          style={[styles.tabBtn, currentId === "coins" && styles.currentId]}
        >
          Coins
        </Text>
        <Text
          onPress={() => setCurrentId("nfts")}
          style={[styles.tabBtn, currentId === "nfts" && styles.currentId]}
        >
          Nfts
        </Text>
      </View>
      {currentId === "coins" ? <Coins /> : <Nfts />}
    </View>
  );
}

const styles = StyleSheet.create({
  marketWrapper: {
    flex: 1,
    marginHorizontal: 10
  },
  tabsWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20
  },
  tabBtn: {
    fontFamily: FONTS.semiBold,
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
    backgroundColor: '#828D99'
  },
  currentId: {
    color: "#000",
    backgroundColor: 'yellow'
  },
  title: {
    marginTop: "10%",
    fontFamily: FONTS.bold,
    fontWeight: "700",
    fontSize: 34,
    lineHeight: 41,
    color: "#fff",
  },
});
