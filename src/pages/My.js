import React, {Component} from 'react'
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import px2dp from "../util";
import Login from "./Login";

export default class My extends Component {
  constructor(props) {
    super(props)
  }

  toHomePage = () => {
    let navigator = this.props.navigator;
    if (navigator) {
      navigator.push({
        name: '登陆',
        component: Login,
      });
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Text>个人设置</Text>
        </View>
        <TouchableHighlight onPress={() => this.toHomePage()}><Text>ryuewryieuwyriuewryuiewrywue</Text></TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ffffff",
    height: px2dp(140),
    paddingTop: px2dp(30),
    paddingHorizontal: 16
  },
})
