import React, {Component} from 'react'
import {Text, View, TextInput, TouchableHighlight} from 'react-native'
import Home from 'Home'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null
    }
  }

  onLogin = () => {
    console.log(this.state)
    let navigator = this.props.navigator;
    if (navigator) {
      navigator.push({
        name: '主界面',
        component: Home,
      });
    }
  }

  render() {
    console.log("this.props", this.props)
    return (
      <View style={styles.wrap}>
        <Text>My</Text>
        <TextInput ref="username"
                   style={styles.textInput}
                   placeholder="请输入地址"
                   placeholderTextColor="#666"
                   onChangeText={text => this.setState({
                     username: text
                   })}
        />
        <TextInput ref="password"
                   style={styles.textInput}
                   secureTextEntry={true}
                   placeholder="请输入地址"
                   placeholderTextColor="#666"
                   onChangeText={text => this.setState({
                     password: text
                   })}
        />

        <TouchableHighlight
          style={style.textCenter}
          underlayColor='gray'
          onPress={() => this.onLogin()}>
          <Text style={style.button}>登录</Text>
        </TouchableHighlight>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: "#fff"
  },

  textInput: {
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 0,
    height: px2dp(28),
    borderRadius: px2dp(6),
    backgroundColor: "#fff"
  },
  textCenter: {
    height: 50,
    marginTop: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
