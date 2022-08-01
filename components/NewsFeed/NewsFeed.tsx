import { View, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import { StatsContext } from "../../context/StatsContext";
import NewsCard from "./NewsCard";

export default function NewsFeed() {
  const { news } = useContext(StatsContext);

  return (
    <View>
      <NewsCard />
    </View>
  );
}
