import React from "react";
import {  View } from "react-native";
import firebase from "firebase";
import firebaseKey from "./firebase/key";
import { Header, Button, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";

export default class Index extends React.Component {
  state = { loggedIn: null };

  componentWillMount()  {
     firebase.initializeApp(firebaseKey);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  };

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button 
          flex={0}
          onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
