/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  Navigator,
  TouchableOpacity,
  View
} from 'react-native';

import Firebase from 'firebase';
let app = new Firebase("fortinncofirebase.firebaseio.com");

class HeaderMenuBack extends Component {

  onButtonPress(){
    console.log('something broken')
  }

  logout(){
    this.props.navigator.popToTop({
      id: 'SignupLogin',
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <View style={styles.left}>
            <TouchableOpacity style={styles.backButton} onPress={this.onButtonPress.bind(this)} >
              <Image source={require('../assets/backButton.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.logo}>
            <Image source={require('../assets/logo_1.png')} />
          </View>
          <View style={styles.menu}>
            <TouchableOpacity onPress={this.logout.bind(this)} >
              <Text style={styles.logout}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 18,
    paddingBottom: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    borderStyle: 'solid',
    borderBottomColor: 'gray',
    borderBottomWidth: 5
  },
  headerWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    alignItems: 'center',
    flex: 1,
    paddingLeft: 7,
  },
  backButton: {
    paddingLeft: 10,
  },
  menu: {
    alignItems: 'flex-end',
    paddingRight: 7,
    flex: 1,
  },
  left: {
    flex: 1,
  },
  logout: {
    fontSize: 16,
    fontFamily: "HelveticaNeue-CondensedBold",
    color: "#333333",
  }
});

module.exports = HeaderMenuBack;
