import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import CoinCard from "./CoinCard";
import { StatsContext } from "../../context/StatsContext";

const options = {
  method: "get",
  headers: {
    accept: "application/json",
  },
};

export default function Coins() {
  const { coins } = useContext(StatsContext);
  
  return (
    <View style={styles.coinsWrapper}>
      <FlatList
        data={coins}
        renderItem={({ item }) => {
          return (
            <CoinCard
              name={item.name}
              percentage={item["24h_change"]}
              symbol={item.symbol}
              price={item.price}
              data={item.prices}
              logo={item.logo} 
              marketType={item.bearish}            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  coinsWrapper: {
    flex: 1,
  },
});
