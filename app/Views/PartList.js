import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Button,
  ImageBackground, FlatList
} from "react-native";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { navigateTo } from '../Redux/actions';
import PartItem from "../Component/PartItem";
import { Divider } from "react-native-elements";
// const backgroundImage = require('../img/bg_travel.jpeg');

const PartList = ({ activeRoute, navigateTo }) => (

      // <ScrollView contentContainerStyle={styles.view}>
        <FlatList data={
          [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
        }
        renderItem={item =>
          <PartItem
            imgUrl="//content2.onliner.by/catalog/device/header/8ff65cc441bd44a55d85aff8ccb5bf95.jpeg"
            description="1 модуля, частота 3200 МГц, CL 16T, тайминги 16-18-18, напряжение 1.35 В"
            name='HyperX Predator 2x8GB DDR4 PC4-25600 HX432C16PB3K2/16'
            price={219.51}
          />
        } />

      // </ScrollView>

);

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
      resizeMode: 'cover',
      backgroundColor: '#ECEFF1',
    },
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        marginTop: 10,
        padding: 5,
    },
    header1: {
        fontSize: 28,
        marginBottom: '30%',
    },
    text: {
        fontSize: 20,
        width: '70%',
        textAlign: 'center',
        lineHeight: 30,
        marginBottom: '10%',
    },
});

const mapStateToProps = state => ({
  activeRoute: state.routes.activeRoute,
});

const mapDispatchToProps = dispatch => ({
  navigateTo: routeName => { dispatch(navigateTo(routeName)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PartList);

