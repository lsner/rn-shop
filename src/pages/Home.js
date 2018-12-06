import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  RefreshControl,
  Animated,
  Platform,
  TouchableWithoutFeedback,
  TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LocalImg from '../images'
import px2dp from '../util'
import My from "./My";

const {width} = Dimensions.get('window')
const headH = px2dp(140)

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: new Animated.Value(0),
      searchView: new Animated.Value(0),
      modalVisible: false,
      searchBtnShow: true,
      listLoading: false,
      isRefreshing: false
    }
  }

  toMyPage = () => {
    let navigator = this.props.navigator;
    if (navigator) {
      navigator.push({
        name: '我的也',
        component: My,
      });
    }
  }


  renderHeader(){
    return (
      <View style={styles.header}>
        <View style={{marginRight: 12, flexDirection: "row", justifyContent: "space-between",}}>
          <TouchableHighlight onPress={() => this.toMyPage()}><Icon name="md-person" size={px2dp(20)} color="#000"/></TouchableHighlight>
          <View style={{textAlign:'center'}}><Text style={{fontSize: px2dp(18), color:"#000"}}>厘米生活</Text></View>
          <View></View>
        </View>
        <Animated.View style={[styles.keywords]}>
          {
            ['肯德基','烤肉','吉野家','粥','必胜客','一品生煎','星巴克'].map((item, i) => {
              return (
                <TouchableWithoutFeedback key={i}>
                  <View style={{marginRight: 12}}>
                    <Text style={{fontSize: px2dp(12), color:"#000"}}>{item}</Text>
                  </View>
                </TouchableWithoutFeedback>
              )
            })
          }
        </Animated.View>
      </View>
    )
  }

  onRefresh(){
    this.setState({isRefreshing: true});
    setTimeout(() => {
      this.setState({isRefreshing: false});
    }, 2000)
  }

  render() {

    return (
      <View style={{flex: 1, backgroundColor: "#f3f3f3"}}>
        <ScrollView
          style={styles.scrollView}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
          )}
          scrollEventThrottle={16}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.onRefresh.bind(this)}
              colors={['#ddd', '#0398ff']}
              progressBackgroundColor="#ffffff"
            />
          }
        >
          {this.renderHeader()}
        </ScrollView>
        <View style={{backgroundColor: "#fff", paddingBottom: 10}}>
          <TouchableOpacity>
            <View style={{height: px2dp(90), paddingHorizontal: 10}}>
              <Image source={LocalImg.ad1} style={{height: px2dp(90), width: width - 20, resizeMode: 'cover'}}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ffffff",
    height: headH,
    paddingTop: px2dp(30),
    paddingHorizontal: 16
  },
  keywords: {
    marginTop: px2dp(14),
    flexDirection: "row"
  },
  scrollView: {
    marginBottom: px2dp(46)
  }
})
