import { View, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import { StatsContext } from "../../context/StatsContext";
import NewsCard from "./NewsCard";
import Loader from "../Loader/Loader";

export default function NewsFeed() {
  const { news, loading } = useContext(StatsContext);
  
  if (loading) return <Loader />
  
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={news}
        renderItem={({ item }) => {
          return (
            <NewsCard
            key={item.id}
              title={item.title}
              link={item.link}
              publishDate={item["published_date"]}
            />
          );
        }}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
}
