import React from "react";
import {
  StyleSheet,
  Text,
  Button,
  ImageBackground, View, Image
} from "react-native";

export default PartItem = ({ imgUrl, description, name, price }) => (

  <View style={styles.view}>
    <View style={{ flex: 1, padding: 12 }}>
      <Image
        style={{ height: 100 }}
        source={{ uri: `https:${imgUrl}` }}
      />
    </View>
    <View style={{ flex: 2 }}>
      <Text>{name}</Text>
      <Text>{description}</Text>
    </View>
    <View style={{ flex: 0.5 }}>
      <Text style={{ "font-weight": "bolder", fontSize: 20 }}>Цена</Text>
      <Text>{price}</Text>
    </View>
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



