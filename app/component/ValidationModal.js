import React, { Component } from "react";
import { Text, TouchableHighlight, View, Alert, StyleSheet, Image } from "react-native";
import Modal from "react-native-modal";

export default function ValidationModal({ closeModal, isVisible, validationErrors }) {
  let data = [];
  for (const [key, value] of Object.entries(categoryMap)) {
    const item = validationErrors.find(item => item.categoryName === key);
    console.log(`error item ${key} : `, item);
    if (item) {
      data.push({
        message: item.message,
        text: value,
        typeName: key
      });
    } else {
      data.push({
        text: value,
        typeName: key
      });
    }

  }

  const CategoryValidation = ({ text, message }) => (
    <View>
      <View style={styles.categoryValidation}>
        <Text style={styles.categoryFont}>{text}</Text>
        {message ?
          <Image
            source={require("../assets/images/not_ok-img.png")}
            style={[styles.image, styles.imageNotOk]}
          />
          :
          <Image
            source={require("../assets/images/ok-img.png")}
            style={styles.image}
          />
        }
      </View>
      {/*{message && <Text style={[styles.categoryFont, styles.categoryErrorFont]}>{message}</Text>}*/}
    </View>
  );
  return (
    <Modal
      onBackButtonPress={closeModal}
      onSwipeMove={closeModal}
      isVisible={isVisible}
    >
      <View style={styles.modal}>
        {data.map(item => {
          return (
            <CategoryValidation
              text={item.text}
              message={item.message ? item.message : undefined}
            />
          );
        })}
      </View>
    </Modal>
  );
}

const categoryMap = {
  socket: "Сокет",
  formFactor: "Форм-фактор",
  mainMemoryType: "Тип оперативной памяти"
};

const styles = StyleSheet.create({
  categoryFont: {
    fontSize: 20
  },
  categoryErrorFont: {
    color: "red"
  }
  ,
  image: {
    width: 40,
    height: 40,
    right: 50,
    position: "absolute"
  },
  imageNotOk: {
    width: 30,
    height: 30,
  },
  categoryValidation: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  modal: {
    backgroundColor: "white",
    margin: 15,
  }
});