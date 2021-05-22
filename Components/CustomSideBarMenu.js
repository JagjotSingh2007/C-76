import * as React from 'react'
import {Text,View,StyleSheet, Touchable, TouchableOpacity} from 'react-native'
import {DrawerItems} from 'react-navigation-drawer'
import firebase from 'firebase'
export default class CustomSideBarMenu extends React.Component{
 render(){
    return(
    <View>
    <DrawerItems {...this.props}/>
    <View>
     <TouchableOpacity onPress={()=>{
     this.props.navigation.navigate('LoginScreen');
     firebase.auth().signOut()
     }}>
     <Text style ={{marginTop:20}}>LOG OUT</Text>
     
     
     </TouchableOpacity>

    </View>
    </View>


    )


 }


}
