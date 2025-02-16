import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import NewsPage from "./components/NewsPage";
import React, { useState, useEffect } from "react"
import Constants from "expo-constants"
import { NEWS_API_KEY } from '@env'

export default function App() {
  const [news, setNews] = useState([]);
  useEffect (() => { alert(NEWS_API_KEY) },[])
  return (
    <View style={styles.container}>
      <NewsPage imageuri="" title="" subtext="" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
