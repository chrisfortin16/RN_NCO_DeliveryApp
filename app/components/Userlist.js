/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  Switch,
  TouchableOpacity,
  View
} from 'react-native';

class Userlist extends Component {

  constructor(props){
    super(props);
    this.state = {
      falseSwitchIsOn : false
    }
  }

  onButtonPress(){
    console.log("Fire");
    this.props.navigator.push({
      component: 'Userinfo',
    })
  }

  render() {
    return (
      <View style={styles.container}>
          <Switch onValueChange={(value) => this.setState({falseSwitchIsOn: value})} style={{marginBottom: 10}} value={this.state.falseSwitchIsOn} />
          <View style={styles.name}>
            <TouchableOpacity style={styles.tapHighlight} onPress={this.onButtonPress.bind(this)}>
              <Text style={styles.nameStyles}>{this.props.name}</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  tapHighlight: {
    height: 24,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: 'green',
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  tapText: {
    color: 'white',
    width: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  nameStyles: {
    flexDirection: 'row',
    color: 'orange',
    fontSize: 20,
  },
});

module.exports = Userlist;
