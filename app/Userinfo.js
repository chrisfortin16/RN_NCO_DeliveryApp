/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component,
  StyleSheet,
  Text,
  Switch,
  TouchableHighlight,
  Image,
  View
} from 'react-native';

import HeaderMenu from './components/HeaderMenu';
import HeaderMenuBack from './components/HeaderMenuBack';
import Userlist from './components/Userlist';
//var HeaderMenu = require('./components/HeaderMenu')
//var HeaderMenuBack = require('./components/HeaderMenuBack')
//var Userlist = require('./components/Userlist')

class Userinfo extends Component {

  render() {
    return (
      <View style={styles.container}>
        <HeaderMenuBack style={styles.headerLogo} navigator={this.props.navigator} name="HeaderMenuBack"/>
        <View style={styles.containerBottom}>
          <Text style={styles.welcome}>User Info</Text>
            <Text style={styles.smallText}>Name</Text>
          <View style={styles.split}>
          </View>
          <Text style={styles.largeText}>Mark Santina</Text>
          <Text style={styles.smallText}>Address</Text>
          <View style={styles.split}>
          </View>
          <Text style={styles.largeText}>123 Main Street Winterpark Florida 32062</Text>
          <Text style={styles.smallText}>Phone</Text>
          <View style={styles.split}>
          </View>
          <Text style={styles.largeText}>881-314-8842</Text>
          <Text style={styles.smallText}>Email</Text>
          <View style={styles.split}>
          </View>
          <Text style={styles.largeText}>Msantina@gmail.com</Text>
          <Text style={styles.smallText}>Amount</Text>
        <View style={styles.split}>
        </View>
        <Text style={styles.largeText}>50 Gallons</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerLogo: {
    backgroundColor: 'grey',
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 32,
    fontFamily: "HelveticaNeue-CondensedBold",
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 28,
    fontFamily: "HelveticaNeue-CondensedBold",
    textAlign: 'center',
    marginTop: 25,
  },
  containerBottom: {
    flex: 10,
    marginTop: 5,
    flexDirection: 'column',
    paddingHorizontal: 10,
    alignItems: 'flex-start',
  },
  split: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderBottomColor: 'gray',
  },
  status: {
    flex: 1,
  },
  info: {
    flex: 1,
    alignItems: 'flex-end',
  },
  smallText: {
    fontSize: 16,
    paddingTop: 10,
    fontFamily: "HelveticaNeue-CondensedBold",
  },
  largeText: {
    fontSize: 20,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  userlist: {

  },
});

module.exports = Userinfo;
