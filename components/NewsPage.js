import { StyleSheet, Text, View, Image } from "react-native";

const NewsPage = ({imageuri, title, subtext}) => {
  return(
      <View style={styles.box}>
        <View style={styles.fontBox}>
          <Text style={styles.Text}>
            {title}
          </Text>
          <Text style={styles.subText}>
            {subtext}
          </Text>
        </View>
        <View style={styles.imageBox}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ url: imageuri }}
          />
        </View>
      </View>
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
    backgroundColor: "steelblue",
    padding: 16,
    justifyContent: "flex-between",
  },
  imageBox: {
    width: 100,
    backgroundColor: "powderblue",
  },
  Text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "#FFFFFF",
  },
});
