import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import React, { useState } from "react";
import { FONTS } from "../../constants";
import CoinCardGraph from "../CoinCardGraph/CoinCardGraph";
import { CoinProp } from "../../types";

export default function CoinCard(props: CoinProp) {
  return (
    <View style={styles.cardWrapper}>
      <Image
        source={{
          uri: props.logo,
        }}
        style={styles.coinLogo}
      />
      <View style={{ width: "20%", marginLeft: 10 }}>
        <Text style={[styles.text, styles.symbol]}>
          {props.symbol.toUpperCase()}
        </Text>
        <Text
          style={[styles.text, styles.coinName]}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {props.name}
        </Text>
      </View>
      <View style={{ width: "30%" }}>
        <CoinCardGraph prices={props.data} marketType={props.marketType} />
      </View>
      <View style={{ width: "20%", marginLeft: 15 }}>
        <Text
          style={[styles.text, styles.value]}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          ${props.price.toLocaleString()}
        </Text>
        <Text
          style={[
            styles.text,
            styles.percentage,
            !props.marketType && styles.negative,
          ]}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {props.marketType ? `+${props.percentage}%` : `${props.percentage}%`}
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
    fontFamily: FONTS.medium,
  },
  percentage: {
    color: "#8AC135",
    fontFamily: FONTS.medium,
  },
  negative: {
    color: "#D45A77",
  },
});
