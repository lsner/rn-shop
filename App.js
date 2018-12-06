import React, { Component } from 'react'
import Navigation from './src/app'
import { View, Platform } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={{backgroundColor: Platform.OS == "ios"?"#ffffff":"#ffffff", flex: 1}}>
        <Navigation/>
      </View>
    )
  }
}
