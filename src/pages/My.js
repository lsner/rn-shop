import React, {Component} from 'react'
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import px2dp from "../util";
import Home from "./Home";

export default class My extends Component {
  constructor(props) {
    super(props)
  }

  toHomePage = () => {
    let navigator = this.props.navigator;
    if (navigator) {
      navigator.push({
        name: '我的也',
        component: Home,
      });
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <View style={{marginRight: 12, flexDirection: "row", justifyContent: "space-between",}}>
            <TouchableHighlight onPress={() => this.toHomePage()}><Icon name="md-person" size={px2dp(20)}
                                                                        color="#000"/></TouchableHighlight>
            <View style={{textAlign: 'center'}}><Text style={{fontSize: px2dp(18), color: "#000"}}>账户信息</Text></View>
            <View></View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ffffff",
    height: px2dp(20),
    paddingTop: px2dp(30),
    paddingHorizontal: 16
  },
})
