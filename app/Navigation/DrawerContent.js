import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity, Image
} from "react-native";
import {
  bgDrawerHeader,
  drawerLogoColor,
  drawerInactiveItemColor,
  bgDrawerInactiveItem,
  bgDrawerActiveItem,
  drawerHeaderColor
} from "../global.styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { navigateTo } from "../Redux/actions";

const DrawerContent = ({ navigateTo, activeRoute, routes, closeDrawer }) => {
  const getImagePath = (route) => `../assets/images/parts/${route.icon}.png`;
  console.log(routes);

  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.headerLogo}>
          <Icon name="airplane-takeoff" size={50} color={drawerLogoColor}/>
        </View>
        <View style={styles.subTitle}>
          <Text style={styles.drawerTitle}>Travel App</Text>
          <Text style={styles.drawerEmail}>pablodarde@gmail.com</Text>
        </View>
      </View>
      {routes.map(route => (
        <TouchableOpacity
          key={route.name}
          onPress={() => {
            closeDrawer();
            navigateTo(route.name);
          }}
          style={
            activeRoute.name === route.name
              ? [styles.drawerItem, styles.activeDrawerItem]
              : styles.drawerItem
          }
        >
          <View>
            <Image
              source={route.icon}
              style={{ width: 40, height: 40 }}
            />
          </View>
          <Text
            style={[
              styles.fontCategory,
              activeRoute.name === route.name
                ? styles.fontCategorySelected : null
            ]}
          >
            {route.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

DrawerContent.propTypes = {
  activeRoute: PropTypes.shape({
    name: PropTypes.string.isRequired,
    screen: PropTypes.any.isRequired,
    icon: PropTypes.string.isRequired
  }).isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigateTo: PropTypes.func.isRequired,
  closeDrawer: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    paddingTop: 40, // 24dp (Space for the translucent StatusBar) plus 16dp Android Header paddingTop
    paddingLeft: 16,
    height: 170,
    backgroundColor: bgDrawerHeader
  },
  headerLogo: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
    overflow: "hidden",
    backgroundColor: "#fff"
  },
  subTitle: {
    height: 56,
    paddingTop: 8
  },
  fontCategory: {
    marginLeft: 10,
    fontSize: 15,
    color: "#000"
  },
  fontCategorySelected: {
    color: "#fff"
  },
  drawerTitle: {
    color: drawerHeaderColor,
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 14
  },
  drawerEmail: {
    color: drawerHeaderColor,
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 14
  },
  activeDrawerItem: {
    backgroundColor: bgDrawerActiveItem
  },
  drawerItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: bgDrawerInactiveItem,
    color: drawerInactiveItemColor,
    height: 50,
    paddingLeft: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#fff"
  },
  drawerItemLogo: {
    paddingRight: 16
  }
});

const mapStateToProps = (state, ownProps) => ({
  routes: state.routes.routes,
  activeRoute: state.routes.activeRoute,
  closeDrawer: ownProps.closeDrawer
});

const mapDispatchToProps = dispatch => ({
  navigateTo: routeName => {
    dispatch(navigateTo(routeName));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerContent);
