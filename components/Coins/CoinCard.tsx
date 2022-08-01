import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { FONTS } from "../../constants";
import CoinCardGraph from "../CoinCardGraph/CoinCardGraph";
import { CoinProp } from "../../types";

export default function CoinCard(props: CoinProp) {

  return (
    <View style={styles.cardWrapper}>
      <Image
        source={{ uri: props.logo }}
        style={styles.coinLogo}
      />
      <View>
        <Text style={[styles.text, styles.symbol]}>{props.symbol}</Text>
        <Text style={[styles.text, styles.coinName]}>{props.name}</Text>
      </View>

      <CoinCardGraph prices={props.data} marketType={props.marketType} />
      <View>
        <Text style={[styles.text, styles.value]}>$ {props.price}</Text>
        <Text
          style={[
            styles.text,
            styles.percentage,
            props.marketType && styles.negative,
          ]}
        >
          +{" "}{props.percentage}%
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  coinLogo: {
    height: 40,
    width: 40,
    backgroundColor: "gray",
    borderRadius: 50,
  },
  text: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 20,
    fontFamily: FONTS.bold,
  },
  symbol: {
    color: "#fff",
  },
  coinName: {
    color: "#828D99",
  },
  value: {
    color: "#8AC135",
  },
  percentage: {
    color: "#8AC135",
  },
  negative: {
    color: "#D45A77",
  },
});
