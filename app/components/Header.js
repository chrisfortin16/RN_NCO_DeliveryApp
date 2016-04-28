/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/logo_1.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 18,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
  },
});

module.exports = Header;
