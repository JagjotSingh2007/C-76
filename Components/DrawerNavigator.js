import * as React from 'react'
import{createDrawerNavigator} from 'react-navigation-drawer'
import {TabNavigator} from './TabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu'

export const DrawerNavigator = createDrawerNavigator({
    Home:TabNavigator,
},{contentComponent:CustomSideBarMenu},{intialRouteName:'Home'}
);
