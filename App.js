import { FlatList, StyleSheet, View } from "react-native";
import NewsPage from "./components/NewsPage";
import React, { useState, useEffect } from "react";
import { NEWS_API_KEY } from "@env";
import axios from "axios";

const URI = `https://newsapi.org/v2/everything?q=japan&language=jp&apiKey=${NEWS_API_KEY}`;

export default function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    console.log("useEffect running..."); // useEffectが実行されているか確認
    getNews().catch((error) => {
      console.error("Error in useEffect:", error);
    });
  }, []);
  const getNews = async () => {
    try {
      // URIに正しくAPIキーが展開されているか確認
      console.log('Requesting URL:', URI);
      
      const response = await axios.get(URI);
      
      // レスポンスのステータスとデータ構造を詳しく確認
      console.log('Response status:', response.status);
      console.log('Response data:', JSON.stringify(response.data, null, 2));
      
      if (response.data.status === 'ok' && Array.isArray(response.data.articles)) {
        setNews(response.data.articles);
      } else {
        // エラーメッセージがあれば表示
        console.error('API Error:', response.data.message || 'Unknown error');
        alert('API Error: ' + (response.data.message || 'Unknown error'));
      }
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
    <View style={styles.container}>
      {console.log("Rendering with news:", news)} // newsの状態を確認
      <FlatList
        data={news}
        renderItem={({ item }) => {
          console.log("rendering item:", item);
          return (
            <NewsPage
              imageuri={item.urlToImage}
              title={item.title}
              subtext={item.publishedAt}
            />
          );
        }}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
