import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  Platform,
  View,
  StatusBar,
  DrawerLayoutAndroid,
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './app/redux/reducers';
import { setNavigator, setActiveRoute } from "./app/redux/actions";
import DrawerContent from './app/navigation/DrawerContent';
import Toolbar from './app/navigation/Toolbar';
import AppNavigation from './app/navigation/AppNavigation';
import { bgStatusBar, bgDrawer } from './app/global.styles';

let store = createStore(reducer);
/* getDrawerWidth       Default drawer width is screen width - header width
* https://material.io/guidelines/patterns/navigation-drawer.html
*/
const getDrawerWidth = () => Dimensions.get('window').width - (Platform.OS === 'android' ? 56 : 64);

export default class App extends Component {
  constructor() {
    super();

    this.drawer = React.createRef();
    this.navigator = React.createRef();
  }

  componentDidMount() {
    store.dispatch(setNavigator(this.navigator.current));
  }

  openDrawer = () => {
    this.drawer.current.openDrawer();
  };

  closeDrawer = () => {
    this.drawer.current.closeDrawer();
  };

  getActiveRouteName = navigationState => {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators

    if (route.routes) {
      console.log("get active routes", route.routes)
      return this.getActiveRouteName(route);
    }
    console.log("get routname", route.routeName)
    return route.routeName;
  };

  render() {
    return (
      <Provider store={store}>
        <DrawerLayoutAndroid
          drawerWidth={getDrawerWidth()}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={
            () => <DrawerContent closeDrawer={this.closeDrawer} />
          }
          drawerBackgroundColor={bgDrawer}
          ref={this.drawer}
        >
          <View style={styles.container}>
            <StatusBar
                translucent
                backgroundColor={bgStatusBar}
                animated
            />
            <Toolbar showMenu={this.openDrawer} />
            <AppNavigation
              onNavigationStateChange={(prevState, currentState) => {
                const currentScreen = this.getActiveRouteName(currentState);
                store.dispatch(setActiveRoute(currentScreen));
              }}
              ref={this.navigator}
            />
          </View>
        </DrawerLayoutAndroid>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
