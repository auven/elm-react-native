import React from 'react';
import { StackNavigator } from 'react-navigation';
import RouteConfigs from './RouteConfigs'
import StackNavigatorConfig from './StackNavigatorConfig'

export default StackNavigator(
    RouteConfigs,
    StackNavigatorConfig
)