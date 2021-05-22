import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {TabNavigator} from './Components/TabNavigator'
import {DrawerNavigator} from './Components/DrawerNavigator'
export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}
}
const SwitchNavigator = createSwitchNavigator({
LoginScreen:LoginScreen,
Drawer:DrawerNavigator
})
const AppContainer = createAppContainer(SwitchNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
