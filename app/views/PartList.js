import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { addToCart, navigateTo } from "../redux/actions";
import PartItem from "../component/PartItem";
import api from "../service/api";

// const backgroundImage = require('../img/bg_travel.jpeg');

class PartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  getFetchName = () => {
    const activeRouteName = this.props.navigation.state.routeName;
    const { routes } = this.props.routes;
    // console.log("Routes: ", routes);
    return routes.find(route => route.name === activeRouteName).fetchName;
  };

  componentDidMount(): void {

    const fetchName = this.getFetchName();
    // console.log("Routes: ", fetchName);

    api.parts.getPartsByName(fetchName)
      .then(data => {
        console.log("Parts gotten!", this.mapRequestToData(data)[1]);

        this.setState({
          data: this.mapRequestToData(data)
        })
      })
      .catch(err => {
        console.log("ERROR parts not gotten!", err);
      });
  }

  mapRequestToData = (request) => {
    return request.map((obj, index) => {
      return {
        ...obj,
        index: index + 1
      }
    })
  };

  _onPress = (data) => {
    console.log(`click item : `, this.props.cartItems);
    this.props.addToCart(this.getFetchName(), data);
  };

  render() {
    const { data } = this.state;

    console.log("data in PairList: ", data.length !== 0 ? data[1].imgUrl : 0);
    if (data && data.length !== 0)
      return (
        <FlatList
          data={data}
          renderItem={ ({item}) => {
            console.log("Cart render item: ", item);
            return(
            <PartItem
              data={item}
              onPress={this._onPress}
              withDivider
            />
           )
          }}
        />
      );
    else
      return null;
  }
}

// PartList.propTypes = {
//   activeRoute: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     screen: PropTypes.any.isRequired,
//     icon: PropTypes.string.isRequired,
//   }).isRequired,
//   navigateTo: PropTypes.func.isRequired,
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: "#ECEFF1"
  },
  view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    marginTop: 10,
    padding: 5
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

const mapStateToProps = state => ({
  activeRoute: state.routes.activeRoute,
  routes: state.routes,
  cartItems: state.routes.cartItems
});

const mapDispatchToProps = dispatch => ({
  navigateTo: routeName => {
    dispatch(navigateTo(routeName));
  },
  addToCart: (itemType, data) => {
    dispatch(addToCart(itemType, data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PartList);

