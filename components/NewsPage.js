import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const NewsPage = ({ imageuri, title, subtext, onPress }) => {
    let date = new Date(subtext);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let publishedDate = year + "年" + month + "月" + day + "日"

  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <View style={styles.fontBox}>
        <Text numberOfLines={2} style={styles.Text}>{title || "No Title"}</Text>
        <Text style={styles.subText}>{publishedDate || "No Data"}</Text>
      </View>
      <View style={styles.imageBox}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: imageuri || 'https://via.placeholder.com/100' }} />
      </View>
    </TouchableOpacity>
  );
};

export default NewsPage;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: "100%",
    borderColor: "lightblue",
    borderWidth: 1,
    flexDirection: "row", // 小要素のfontBoxとimageBoxを横並びにするため
  },
  fontBox: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  imageBox: {
    width: 100,
  },
  Text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12
  },
});
