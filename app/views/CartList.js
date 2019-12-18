import React, { Component } from "react";
import { FlatList, StyleSheet, Text, ToastAndroid, View } from "react-native";
import { connect } from "react-redux";
import { addToCart, navigateTo, removeCartItem } from "../redux/actions";
import PartItem from "../component/PartItem";
import api from "../service/api";
import { Button } from "react-native-elements";
import ValidationModal from "../component/ValidationModal";

// const backgroundImage = require('../img/bg_travel.jpeg');

class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      validationErrors: [],
      modalVisible: false
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      let { cartItems } = this.props;
      console.log("Cart not parsed items: ", cartItems);

      let data = [];
      for (const [key, value] of Object.entries(cartItems)) {
        data.push({
          ...value,
          typeName: key
        });
      }
      console.log("Cart parsed items: ", data);
      this.setState({
        data: data
      });
    });

  }

  _onPressRemoveItem = (typeName) => {
    this.props.removeCartItem(typeName);
    this.setState({
      data: this.state.data.filter(item => item.typeName !== typeName)
    });
  };

  _onPressClearItems = (index) => {
    console.log("click clear items!");
    this.props.removeCartItem("clear");
    this.setState({
      data: undefined
    });
  };

  _onPressCheck = () => {
    const partList = this.state.data;
    if (partList && partList.length < 2) {
      ToastAndroid.show("Для проверки нужно минимум две запчасти!", ToastAndroid.SHORT);
      return;
    }

    api.parts.checkParts({ partList })
      .then(validationErrors => {
        console.log("validation errors gotten:", validationErrors);
        this.setState({
          validationErrors,
          modalVisible: true
        });
      })
      .catch(err => {
        console.log("ERROR validation errors not gotten:", err);
      });
  };

  _openModal = () => {
    this.setState({ modalVisible: true });
  };

  _closeModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    const { data, modalVisible, validationErrors } = this.state;

    if (data && data.length !== 0) {
      console.log("Cart render items: ", this.state.data);
      return (

        <View style={{ flex: 1 }}>
          <ValidationModal
            isVisible={modalVisible}
            closeModal={this._closeModal}
            validationErrors={validationErrors}
          />
          <ControlPanel
            onPressClear={this._onPressClearItems}
            onPressCheck={this._onPressCheck}
          />
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return (
                <PartItem
                  data={item}
                  onRemove={this._onPressRemoveItem}
                  withDivider
                />
              );
            }}
          />
          <View style={{ height: 110 }}/>

        </View>
      );
    } else {
      console.log("Cart render items is null.");
      return (
        <View style={{ flex: 1, alignItems: "center", top: "35%" }}>
          <Text style={{ fontWeight: "bold", fontSize: 40 }}>
            Корзина пуста
          </Text>
        </View>
      );
    }
  }
}

const ControlPanel = ({ onPressClear, onPressCheck }) => {
  return (
    <View style={styles.controlPanel}>
      <Button
        buttonStyle={[styles.titleButton, styles.clearButton]}
        title="Очистить"
        accessibilityLabel="Clear"
        onPress={onPressClear}
      />
      <Button
        buttonStyle={[styles.titleButton, styles.checkButton]}
        title="Проверить"
        accessibilityLabel="Check"
        onPress={onPressCheck}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleButton: {
    flex: 1,
    margin: 13,
    width: "70%"

  },
  clearButton: {
    backgroundColor: "#ffab19"

  },
  checkButton: {
    backgroundColor: "#198813"
  },

  controlPanel: {
    bottom: 0,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    height: 110,
    marginBottom: 13,
    marginTop: 13

  }
});

const mapStateToProps = state => ({
  cartItems: state.routes.cartItems
});

const mapDispatchToProps = dispatch => ({
  navigateTo: routeName => {
    dispatch(navigateTo(routeName));
  },
  removeCartItem: (itemType) => {
    dispatch(removeCartItem(itemType));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartList);

