import * as React from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import RequestScreen from '../screens/RequestScreen'
import DonateScreen from '../screens/DonateScreen'

export const TabNavigator = createBottomTabNavigator({
    RequestScreen:RequestScreen,
    DonateScreen:DonateScreen
}
)