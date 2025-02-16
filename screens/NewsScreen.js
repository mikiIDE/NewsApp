import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import NewsPage from "../components/NewsPage";
import React, { useState, useEffect } from "react";
import { NEWS_API_KEY } from "@env";
import axios from "axios";

const URI = `https://newsapi.org/v2/everything?q=japan&language=jp&apiKey=${NEWS_API_KEY}`;
export default function NewsScreen({ navigation }) {
  const [news, setNews] = useState([]);
  useEffect(() => {
    console.log("useEffect running..."); // useEffectが実行されているか確認
    getNews().catch((error) => {
      console.error("Error in useEffect:", error);
    });
  }, []);
  const getNews = async () => {
    try {
      const response = await axios.get(URI);
        setNews(response.data.articles);
    } catch (error) {
      if (error.response) {
        // APIからのエラーレスポンスの詳細を表示
        console.error('API Error Response:', error.response.data);
        alert('API Error: ' + (error.response.data.message || error.message));
      } else {
        console.error('Request Error:', error.message);
        alert('Request Error: ' + error.message);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* {console.log("Rendering with news:", news)} // newsの状態を確認 */}
      <FlatList
        data={news}
        renderItem={({ item }) => {
          return (
            <NewsPage
              imageuri={item.urlToImage}
              title={item.title}
              subtext={item.publishedAt}
              onPress={() => navigation.navigate("詳細ページ", { article: item })}
            // onPressの第１引数はnameで飛ぶ場所を指定、第２引数は必要な情報を設定する
            />
          );
        }}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
