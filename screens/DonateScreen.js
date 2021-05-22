import * as React from 'react'
import {Text,StyleSheet,TouchableOpacity,View} from 'react-native'
import RequestScreen from './RequestScreen';

export default class DonateScreen extends React.Component{
render (){

return(
<View>
<Text style = {styles.container}>DONATE BOOKS</Text>
<View>
 <TextInput
 style = {styles.TitleBox}
 placeHolder = 'Title Of The Book'
 maxLenght = {20}
 onPress = {text=>{
     this.setState({
        Title:text
     })
 }}
 />
  <TextInput
 style = {styles.ReasonBox}
 placeHolder = 'Reason For Issue'
 maxLenght = {50}
 onPress = {text=>{
     this.setState({
        Reason:text
     })
 }}
 />
  </View>
  <TouchableOpacity style = {styles.SubmitButton}
  onPress = {()=>{
    this.props.navigation.navigate('RequestScreen')  
  }}
  >
   <Text style = {styles.container}>SUBMIT</Text>
   
  </TouchableOpacity>
 </View>
);
}
}
const styles = StyleSheet.create({
container:{
   fontSize:20,
   fontWeight:'bold',
   flex:1,
   backgroundColor:'black'
},
TitleBox:{
fontColor:'black',
fontSize:15,
flex:1
},
ReasonBox:{
fontColor:'black',
fontSize:15,
flex:1
}
})