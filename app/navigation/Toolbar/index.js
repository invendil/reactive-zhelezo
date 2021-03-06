import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { goBack, navigateTo } from "../../redux/actions";
import { bgHeader } from "../../global.styles";

class Toolbar extends React.Component {
  static propTypes = {
    activeRoute: PropTypes.shape({
      name: PropTypes.string.isRequired,
      screen: PropTypes.any.isRequired,
      icon: PropTypes.string.isRequired
    }).isRequired,
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
    showMenu: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    navigateTo: PropTypes.func.isRequired,
  };

  onActionSelected = position => {
    const { navigateTo } = this.props;

    if (position === 0) {
      navigateTo("Корзина");
    } else if (position === 1) {
      navigateTo("Credits");
    }
  };

  render() {
    const { showMenu, goBack, activeRoute, routes } = this.props;

    return (
      <View style={styles.header}>
        <Icon.ToolbarAndroid
          navIconName="menu"
          titleColor="#fff"
          title={activeRoute.name}
          onIconClicked={showMenu}
          overflowIconName="dots-vertical"
          style={{ height: 56 }}
          actions={[
            { title: "Корзина", show: "never", iconName: "cart" }
          ]}
          onActionSelected={this.onActionSelected}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: bgHeader,
    height: 80, // 56dp AppBar height plus 24dp correction for the StatusBar translucent
    paddingTop: 24 // StatusBar's height
  }
});

const mapStateToProps = (state, ownProps) => ({
  activeRoute: state.routes.activeRoute,
  routes: state.routes.routes,
  showMenu: ownProps.showMenu,
  goBack: ownProps.goBack
});

const mapDispatchToProps = dispatch => ({
  goBack: () => {
    dispatch(goBack());
  },
  navigateTo: routeName => {
    dispatch(navigateTo(routeName));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);
