import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "./components/common/";

export default class Index extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Header headerText="Authentication"/>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
