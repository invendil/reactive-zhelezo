import React from "react";
import {
  StyleSheet,
  Text,
  Button,
  ImageBackground, View, Image
} from "react-native";
import { Divider } from "react-native-elements";

export default PartItem = ({ imgUrl, description, name, price }) => (
  <View>
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
      <Text style={{ fontWeight: "bold", fontSize: 17 }}>Цена</Text>
      <Text style={{ fontWeight: "bold", fontSize: 17 }}>{price}</Text>
    </View>
  </View>
    <Divider style={{height: 3, backgroundColor: "#ee8615"}} />
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
    height: 100,
    marginBottom: 13,
    marginTop: 13
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



