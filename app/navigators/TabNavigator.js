import React from 'react'
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import px2dp from '../util'

import HomeIndex from '../pages/Home'
import Discover from '../pages/Discover'
import Order from '../pages/Order'
import My from '../pages/My'

const RouteConfig = {
    HomeIndex: {
        screen: HomeIndex,
        navigationOptions: ({ navigation }) => ({
            title: '外卖',
            tabBarIcon: ({ focused, tintColor }) => focused ?
                <Icon name='logo-google' size={px2dp(22)} color="#3496f0" /> :
                <Icon name='logo-google' size={px2dp(22)} color="#666" />
        }),
    },
    Discover: {
        screen: Discover,
        navigationOptions: ({ navigation }) => ({
            title: '发现',
            tabBarIcon: ({ focused, tintColor }) => focused ?
                <Icon name='ios-compass' size={px2dp(22)} color="#3496f0" /> :
                <Icon name='ios-compass-outline' size={px2dp(22)} color="#666" />
        }),
    },
    Order: {
        screen: Order,
        navigationOptions: ({ navigation }) => ({
            title: '订单',
            tabBarIcon: ({ focused, tintColor }) => focused ?
                <Icon name='ios-list-box' size={px2dp(22)} color="#3496f0" /> :
                <Icon name='ios-list-box-outline' size={px2dp(22)} color="#666" />
        }),
    },
    My: {
        screen: My,
        navigationOptions: ({ navigation }) => ({
            title: '我的',
            tabBarIcon: ({ focused, tintColor }) => focused ?
                <Icon name='ios-contact' size={px2dp(22)} color="#3496f0" /> :
                <Icon name='ios-contact-outline' size={px2dp(22)} color="#666" />
        }),
    }
}

const TabNavigatorConfig = {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    initialRouteName: 'HomeIndex'
}

export default TabNavigator(RouteConfig, TabNavigatorConfig)