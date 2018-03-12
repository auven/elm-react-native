/**
 * @author Lei
 * @repo https://github.com/stoneWeb/elm-react-native
 */
'use strict';

import React, { Component } from 'react'
import {
    Text,
    View,
    Platform
} from 'react-native'
import NavBar from '../component/NavBar'
import TakeOut from './TakeOut'
import Breakfast from './Breakfast'
import Tabs from 'antd-mobile/lib/tabs/index';
const statusbarHeight = Platform.OS === 'android' && Platform.Version > 20 ? 20 : 0
const headerHeight = Platform.OS === 'ios' ? 44 + statusbarHeight : 56 + statusbarHeight

export default class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 0
        }
    }
    render() {
        const tabs = [
            { title: '外卖' },
            { title: '早餐' },
        ];
        return (
            <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
                <NavBar title="订单" />
                <Tabs
                    tabs={tabs}
                    // initialPage={1}
                    // page={this.state.page}
                    // renderTabBar={false}
                    // swipeable={false}
                    tabBarActiveTextColor='#0398ff'
                    tabBarInactiveTextColor='#666'
                    tabBarUnderlineStyle={{
                        backgroundColor: '#0398ff',
                        transform: [{
                            scaleX: 0.3
                        }]
                    }}
                >
                    <TakeOut />
                    <Breakfast />
                </Tabs>
            </View>
        )
    }
}
