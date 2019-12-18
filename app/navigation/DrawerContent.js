import React from "react";
import { connect } from "react-redux";
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
import { navigateTo } from "../redux/actions";

const DrawerContent = ({ navigateTo, activeRoute, routes, closeDrawer }) => {

  return (
    <ScrollView>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/logo.png")}
          style={{width:"85%", height: "85%",top:"20%" }}
        />
      </View>
      {routes.map(route => {
        if (route.icon) {
          return <TouchableOpacity
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
                style={{ width: 50, height: 50 }}
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
          </TouchableOpacity>;
        } else {
          return null;
        }
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    height: 170,
    alignItems: "center",
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
    fontSize: 20,
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
    height: 70,
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
