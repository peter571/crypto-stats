import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { News, Home } from "./screens";
import { NewsParamList, RootParamList } from "./types";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { StatsProvider } from "./context/StatsContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Article from "./components/Article/Article";

const Tab = createMaterialBottomTabNavigator<RootParamList>()
const NewsStack = createNativeStackNavigator<NewsParamList>()

export default function App() {
  const [loaded] = useFonts({
    monserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
    monserratSemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    monserratMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
    monserratLight: require("./assets/fonts/Montserrat-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  function NewsArticles() {
    return (
      <NewsStack.Navigator>
        <NewsStack.Screen name="Articles" component={News} options={{ headerShown: false }} />
        <NewsStack.Screen name="Article" component={Article} />
      </NewsStack.Navigator>
    );
  }

  return (
    <StatsProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="yellow"
          inactiveColor="#747481"
          barStyle={{ backgroundColor: "#1E2127" }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="stats-chart" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="News"
            component={NewsArticles}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="newspaper" size={24} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </StatsProvider>
  );
}
