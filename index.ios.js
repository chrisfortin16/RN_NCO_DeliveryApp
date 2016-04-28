/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  AsyncStorage,
  View,
  Text
} from 'react-native';

//Require in the Routes
import Deliveries from './app/Deliveries';
import SignupLogin from './app/SignupLogin';
import Userinfo from './app/Userinfo';
import Firebase from 'firebase';

let app = new Firebase("fortinncofirebase.firebaseio.com");

class NCO_Project extends Component {

  constructor(props){
    super(props);
    this.state = {
      component: null,
      loaded: false
    };
  }

  componentWillMount(){

    AsyncStorage.getItem('user_data').then((user_data_json) => {
      let user_data = JSON.parse(user_data_json);
      let component = {component: SignupLogin};
      if(user_data != null){
        app.authWithCustomToken(user_data.token, (error, authData) => {
          if(error){
            this.setState(component);
          }else{
            this.setState({component: Deliveries});
          }
        });
      }else{
        this.setState(component);
      }
    });

  }

  render(){
    console.log('Index state: ', this.state);
    if(this.state.component) {
      return(
        <Navigator
        initialRoute={{component: this.state.component}}
        renderScene={(route, navigator) => {
          if(route.component){
            return React.createElement(route.component, { navigator })
          }
        }}
        />
      )
    }else{
      return(
        <View><Text>Hey something's broken</Text></View>
      )
    }
  }

  // render() {
  //   return (
  //     <Navigator
  //     style={styles.container}
  //       initialRoute = {{
  //         component: SignupLogin
  //       }}
  //       renderScene = { this.navigatorRenderScene }
  //   />
  //   );
  // }
  //
  // navigatorRenderScene(route, navigator){
  //   _navigator = navigator;
  //   switch (route.id) {
  //     case 'SignupLogin':
  //       return (<SignupLogin navigator={navigator} title="SignupLogin Title" />);
  //     case 'Deliveries':
  //       return (<Deliveries navigator={navigator} title="Deliveries Title" />);
  //     case 'Userinfo':
  //       return (<Userinfo navigator={navigator} title="Userinfo Title" />);
  //     case 'Userlist':
  //       return (<Userlist navigator={navigator} title="Userlist Title" />);
  //   }
  // }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('NCO_Project', () => NCO_Project);
