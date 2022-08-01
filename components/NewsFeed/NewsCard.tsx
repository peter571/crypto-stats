import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FONTS } from "../../constants";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NewsParamList } from "../../types";

interface NewsCardProp {
  title: string;
  link: string;
  publishDate: any;
}

export default function NewsCard(props: NewsCardProp) {
  const navigation = useNavigation<NativeStackNavigationProp<NewsParamList>>();

  const formatDate = new Date(props.publishDate.slice(0, 10));
  const formatedDate = formatDate.toLocaleDateString(undefined);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.dateAndMoreWrapper}>
        <Text style={styles.date}>{formatedDate}</Text>
        <Text
          style={styles.more}
          onPress={() =>
            navigation.navigate("Article", {
              title: props.title,
            })
          }
        >
          Read more <Feather name="external-link" size={16} color="#747481" />
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  dateAndMoreWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  title: {
    color: "#747481",
    fontFamily: FONTS.medium,
    fontSize: 14,
  },
  date: {
    color: "#747481",
    fontFamily: FONTS.light,
    fontSize: 10,
  },
  more: {
    color: "#747481",
    fontFamily: FONTS.light,
    fontSize: 12,
  },
});
