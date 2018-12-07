/**
 * @author Lei
 * @repo https://github.com/stoneWeb/elm-react-native
 */
'use strict';

import React, { Component } from 'react'
import { View, StatusBar, Platform } from 'react-native'
import NavigationExperimental from 'react-native-deprecated-custom-components'
import Routes from './component/Routers'

export default class Navigation extends Component{
    constructor(props){
      super(props)
    }
    render(){
        return (
          <NavigationExperimental.Navigator
            initialRoute={Routes[0]}
            initialRouteStack={Routes}
            configureScene={() => NavigationExperimental.Navigator.SceneConfigs.FloatFromRight}
            renderScene={(route, navigator) => {
                  return <route.component navigator={navigator} {...route.args}/>
                }
            }
          />
        )
    }
}
