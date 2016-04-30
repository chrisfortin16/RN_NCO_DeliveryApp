/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableHighlight,
  ScrollView
} from 'react-native';

var Header = require('./components/Header');
var Deliveries = require('./Deliveries');

import Firebase from 'firebase';
let app = new Firebase("fortinncofirebase.firebaseio.com");

class SignupLogin extends Component {

  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      Signupemail: '',
      Signuppassword: '',
      loaded: true
    };
  }

  onButtonPress(){
    this.props.navigator.push({
      id: 'Deliveries',
    })
  }

  // login(){
  //
  //     this.setState({
  //       loaded: false
  //     });
  //     app.authWithPassword({
  //       "email": this.state.email,
  //       "password": this.state.password
  //     }, (error, user_data) => {
  //
  //       this.setState({
  //         loaded: true
  //       });
  //
  //       if(error){
  //         alert('Login Failed. Please try again');
  //       }else{
  //         AsyncStorage.setItem('user_data', JSON.stringify(user_data));
  //         this.props.navigator.push({
  //           component: Deliveries
  //         });
  //       }
  //     });
  //   }//close login
  //
  //
  //
  //   signup(){
  //
  //   this.setState({
  //     loaded: false
  //   });
  //
  //   app.createUser({
  //     'email': this.state.Signupemail,
  //     'password': this.state.Signuppassword
  //   }, (error, userData) => {
  //
  //     if(error){
  //       switch(error.code){
  //
  //         case "EMAIL_TAKEN":
  //           alert("The new user account cannot be created because the email is already in use.");
  //         break;
  //
  //         case "INVALID_EMAIL":
  //           alert("The specified email is not a valid email.");
  //         break;
  //
  //         default:
  //           alert("Error creating user:");
  //       }
  //
  //     }else{
  //       alert('Your account was created!');
  //     }
  //
  //     this.setState({
  //       Signupemail: '',
  //       Signuppassword: '',
  //     });
  //
  //   });
  //
  // }//close signup

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerBar}>
          <Header style={styles.headerLogo} name="Header"/>
          <ScrollView style={styles.containerBottom}>

            <View>
              <Text style={styles.welcome}>Welcome</Text>
            </View>

            <View style={styles.formContainer}>
              <Text style={styles.heading}>Sign up</Text>
              <Text style={styles.inputTitle}>Email</Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={(Signupemail)=> this.setState({Signupemail})}
                value={this.state.Signupemail} />
              <Text style={styles.inputTitle}>Password</Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={(Signuppassword)=> this.setState({Signuppassword})}
                value={this.state.Signuppassword}
                secureTextEntry = {true} />
              <TouchableHighlight
                style={styles.tapHighlight}
                onPress={this.onButtonPress.bind(this)}>
                  <View style={styles.buttonContainer}>
                  <Text style={styles.tapText}>Sign Up</Text>
                  </View>
              </TouchableHighlight>
            </View>


            <View style={styles.formContainer}>
              <Text style={styles.heading}>Login</Text>
              <Text style={styles.inputTitle}>Email</Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={(email)=> this.setState({email})}
                value={this.state.email} />
              <Text style={styles.inputTitle}>Password</Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={(password)=> this.setState({password})}
                value={this.state.password}
                secureTextEntry = {true} />
              <TouchableHighlight
                style={styles.tapHighlight}
                onPress={this.onButtonPress.bind(this)}>
                  <View style={styles.buttonContainer}>
                    <Text style={styles.tapText}>Login</Text>
                    </View>
              </TouchableHighlight>
              <View style={styles.extraSpace}>

              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );//close return
  }//close render

}//close component

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  headerLogo: {
    backgroundColor: 'grey',
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerBar: {
    backgroundColor: 'gray',
    flex: 1,
    alignSelf: 'stretch',
  },
  welcome: {
    fontSize: 32,
    fontFamily: "HelveticaNeue-CondensedBold",
    textAlign: 'center',
  },
  heading: {
    fontSize: 28,
    fontFamily: "HelveticaNeue-CondensedBold",
    textAlign: 'center',
    marginTop: 25,
  },
  formContainer: {
    paddingLeft: 35,
    paddingRight: 35,
    alignSelf: 'stretch',
  },
  containerBottom: {
    flex: 10,
    marginTop: 5,
    backgroundColor: 'white',
  },
  buttonContainer: {
    backgroundColor: 'green',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tapText: {
    color: 'white',
    fontFamily: "HelveticaNeue-CondensedBold",
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
  },
  inputTitle: {
    fontSize: 18,
  },
  inputBox: {
    flex: 3,
    height: 36,
    marginBottom: 25,
    borderColor: '#173e43',
    borderWidth: 2,
    borderRadius: 4,
    backgroundColor: '#dddddd',
    justifyContent: 'center',
    textAlign: 'left',
    paddingLeft: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  extraSpace: {
    margin: 30,
  },
});

module.exports = SignupLogin;
