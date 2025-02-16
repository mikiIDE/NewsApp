import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import NewsPage from "./components/NewsPage";

export default function App() {
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
