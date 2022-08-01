import { View, Text, Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import { LineChart } from "react-native-chart-kit";

interface GraphProp {
  prices: number[]
  marketType: boolean
}

export default function CoinCardGraph(props: GraphProp) {

  return (
    <View style={styles.graph}>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: props.prices
            },
          ],
        }}
        width={150} 
        height={70}
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#1E2127",
          backgroundGradientFrom: "#1E2127",
          backgroundGradientTo: "#1E2127",
          color: (opacity = 0) =>
            `${
              props.marketType ? "rgba(255, 74, 122" : "rgba(115, 213, 0"
            }, ${opacity})`,
          fillShadowGradient: "#1E2127",
          fillShadowGradientTo: "#1E2127",
        }}
        bezier
        withDots={false}
        withHorizontalLabels={false}
        withVerticalLabels={false}
        withInnerLines={false}
        withOuterLines={false}
        yLabelsOffset={0}
        xLabelsOffset={0}
        verticalLabelRotation={30}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 17,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  graph: {
    justifyContent: "center",
    alignItems: "center",
  },
});
