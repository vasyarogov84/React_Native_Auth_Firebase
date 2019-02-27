import React, { Component } from "react";
import { View } from "react-native";
import Index from "./src/Index";



export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
          <Index />
      </View>
    )
  }
}


