import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useContext } from "react";
import NftCard from "./NftCard";
import { StatsContext } from "../../context/StatsContext";
import Loader from "../Loader/Loader";

export default function Nfts() {
  const { nfts, loading } = useContext(StatsContext);

  if (loading) return <Loader />;

  return (
    <View style={styles.nftsWrapper}>
      <FlatList
        data={nfts}
        renderItem={({ item }) => {
          return (
            <NftCard
              name={item.name}
              logo={item.logo}
              key={item.rank}
              price={item.price}
              volume={item.volume}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  nftsWrapper: {
    flex: 1,
  },
});
