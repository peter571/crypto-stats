import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { FONTS } from "../../constants";
import { NftCardProp } from "../../types";

export default function NftCard(props: NftCardProp) {
  return (
    <View style={styles.wrapper}>
      <Image source={{ uri: props.logo }} style={styles.nftLogo} resizeMode="contain" />

      <Text style={styles.name} numberOfLines={1}>
        {props.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
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
  percentage: {
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
