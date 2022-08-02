import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { FONTS } from "../../constants";
import { NftCardProp } from "../../types";

export default function NftCard(props: NftCardProp) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapper}>
      <Image source={{ uri: props.logo }} style={styles.nftLogo} />
      <View>
        <Text style={styles.name} numberOfLines={1}>{props.name}</Text>
        <Text style={styles.volumeText}>volume</Text>
        <Text style={styles.volume} numberOfLines={1}>{props.volume}</Text>
      </View>
      </View>
      <Text style={styles.price}>
      Price: {props.price}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 15
  },
  nftLogo: {
    height: 45,
    width: 45,
    borderRadius: 50,
    backgroundColor: "gray",
    marginRight: 10,
  },
  price: {
    fontFamily: FONTS.light,
    color: "#8AC135",
    fontSize: 12,
  },
  name: {
    fontFamily: FONTS.semiBold,
    color: "#fff",
    fontSize: 14,
  },
  volumeText: {
    fontFamily: FONTS.light,
    color: "gray",
    fontSize: 12,
  },
  volume: {
    fontFamily: FONTS.light,
    color: "#fff",
    fontSize: 14,
  },
});
