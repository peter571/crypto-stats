import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import WebView from "react-native-webview";
import Constants from "expo-constants";
import { RouteProp, useRoute } from "@react-navigation/native";
import { NewsParamList } from "../../types";
import { StatsContext } from "../../context/StatsContext";

export default function Article() {
  const { news } = useContext(StatsContext);
  const route = useRoute<RouteProp<NewsParamList>>();
  const id = route.params?.title;

  const item = news.find(
    (recipe) => recipe.title.toLowerCase() === id!.toLowerCase()
  );

  return (
    <WebView
      style={styles.container}
      originWhitelist={["*"]}
      source={{ uri: item.link }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
