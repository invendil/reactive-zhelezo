import React from "react";
import { systemWeights } from "react-native-typography";
import { iOSColors } from "react-native-typography";
import {
  StyleSheet,
  Text,
  View,
  Image, TouchableOpacity, TouchableWithoutFeedback
} from "react-native";
import { Button, Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function PartItem({ data, withDivider, onPress, onRemove }) {

  const _onPress = () => {
    onPress(data);
  };

  const _onRemove = () => {
    onRemove(data.typeName);
  };

  return (
    <TouchableWithoutFeedback
      key={data.index}
      onPress={onPress ? _onPress : null}
    >
      <View>
        <View style={styles.view}>
          <View style={{ flex: 1, padding: 12 }}>
            <Image
              style={{ height: 110 }}
              source={{ uri: `https:${data.imgUrl}` }}
            />
          </View>
          <View style={{ flex: 2 }}>
            <Text>{data.name}</Text>
            <Text>{data.description}</Text>
          </View>
          <View style={{ flex: 0.5, alignItems: "center" }}>
            {onRemove &&
            <Button
              buttonStyle={styles.closeButton}
              title="X"
              color="#1E6738"
              accessibilityLabel="X"
              onPress={_onRemove}
            />
            }
            <Text style={{ ...systemWeights.bold, color: iOSColors.red, fontSize: 17 }}>{data.price}</Text>
            <Text style={{ ...systemWeights.semibold, fontSize: 15 }}>Руб</Text>
          </View>
        </View>
        {withDivider ? <Divider style={{ height: 3, backgroundColor: "#ee8615" }}/> : null}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: "#ECEFF1"
  },

  closeButton: {
    height: 35,
    width: 35,
    backgroundColor: "#ff0007",
    marginBottom: 13
  },

  view: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 110,
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



