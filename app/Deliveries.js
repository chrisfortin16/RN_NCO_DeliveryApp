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
  AsyncStorage,
  Image,
  Navigator,
  Dimensions,
  ScrollView,
  View
} from 'react-native';

const fakedata = ['Brad Hoolin', 'Chris Fortin', 'Mike Ovechcan', 'Mark Santina', 'Charlie Blith', 'Stanley Cup'];

import HeaderMenu from './components/HeaderMenu';
import Userlist from './components/Userlist';
import Userinfo from './Userinfo';
import Firebase from 'firebase';

let app = new Firebase("fortinncofirebase.firebaseio.com");

class Deliveries extends Component {

  onButtonPress(){
    this.props.navigator.push({
      id: 'Userinfo',
      // passProps: {
      //   name: this.props.person.name
      // }
    })
  }

  // constructor(props){
  //   super(props);
  //
  //   this.state = {
  //     name: '',
  //     address: '',
  //     phone: '',
  //     email: '',
  //     amount: '',
  //     loaded: true
  //   }
  // }

  // componentWillMount(){
  //   app.on("value", function(snapshot) {
  //     console.log(snapshot.val());
  //   }, function (errorObject) {
  //     console.log("The read failed: " + errorObject.code);
  //   });
  // }
  //
  // componentWillMount(){
  //   AsyncStorage.getItem('user_data').then((user_data_json) => {
  //     let user_data = JSON.parse(user_data_json);
  //     this.setState({
  //       user: user_data,
  //       loaded: true
  //     });
  //   });
  // }

  render() {
    // console.log("nav: ", this.props.navigator);
    return (
      <View style={styles.container}>
        <HeaderMenu style={styles.headerLogo} navigator={this.props.navigator} name="HeaderMenu"/>
        <View style={styles.containerBottom}>
          <Text style={styles.welcome}>Deliveries</Text>
            <View style={styles.split}>
              <View style={styles.status}>
                <Text style={styles.smallText}>Status</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.smallText}>Info</Text>
              </View>
            </View>
            <Userlist style={styles.userlist} navigator={this.props._navigator} name={fakedata[0]}/>
            <Userlist style={styles.userlist} navigator={navigator} name={fakedata[1]}/>
            <Userlist style={styles.userlist} navigator={navigator} name={fakedata[2]}/>
            <Userlist style={styles.userlist} navigator={navigator} name={fakedata[3]}/>
            <Userlist style={styles.userlist} navigator={navigator} name={fakedata[4]}/>
            <Userlist style={styles.userlist} navigator={navigator} name={fakedata[5]}/>
          </View>
      </View>
    );
  }

}//close Component


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
    fontFamily: "HelveticaNeue-CondensedBold",
  },
  userlist: {

  },
});

module.exports = Deliveries;
