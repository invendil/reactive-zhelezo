import React from "react";
import {
  StyleSheet,
  Text,
  Button,
  ImageBackground, View, Image
} from "react-native";

export default PartItem = ({ imgUrl, description, name, price }) => (

  <View style={styles.view} >
    <Image
      style={{ width: "25%" }}
      source={{ uri: `https:${imgUrl}` }}
    />
    <View style={{ flex: 2, "align": "center" }}>
      <Text>{name}</Text>
      {/*<Text>{description}</Text>*/}
    </View>
    <Text style={{ flex: 0.5 }}>{price}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: "#ECEFF1"
  },
  view: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 100
  },
  header1: {
    fontSize: 28,
    marginBottom: "30%"
  },
  text: {
    fontSize: 20,
    width: "70%",
    textAlign: "center",
    lineHeight: 30,
    marginBottom: "10%"
  }
});



