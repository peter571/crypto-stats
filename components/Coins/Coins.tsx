import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import CoinCard from "./CoinCard";
import { StatsContext } from "../../context/StatsContext";
import Loader from "../Loader/Loader";

const options = {
  method: "get",
  headers: {
    accept: "application/json",
  },
};

export default function Coins() {
  const { coins, loading } = useContext(StatsContext);

  if (loading) return <Loader />
  
  return (
    <View style={styles.coinsWrapper}>
      <FlatList
        data={coins}
        renderItem={({ item }) => {
          return (
            <CoinCard
              name={item.name}
              percentage={item["percent_change_24h"]}
              symbol={item.symbol}
              price={item.price}
              data={item.prices}
              logo={item.image} 
              marketType={item.bearish}
              key={item.id}            />
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
