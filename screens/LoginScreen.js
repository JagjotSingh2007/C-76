import * as React from 'react'
import {StyleSheet,View,Text,TouchableOpacity,Alert,TextInput,Image,Modal,KeyboardAvoidingView} from 'react-native'
import firebase from 'firebase'
import  db from '../config'
//TEACHERS NO 9966783794
export default class LoginScreen extends React.Component{
 constructor(){
     super();
     this.state = {
      emailId:"",
      password:"",
      address:"",
      firstName:"",
      lastName:"",
      contactNo:"",
      confirmPassword:"",
      isModalVisible:"false"
     }
 }
 userSignUp = (emailId,password,confirmPassword)=>{
    if(password===confirmPassword){
    firebase.auth().createUserWithEmailAndPassword(emailId,password).then(()=>{
      db.collection('users').add({
        'firstName':this.state.firstName,
         'lastName':this.state.lastName,
         'address':this.state.address,
         'emailId':this.state.emailId,
         'password':this.state.password
      })
    })
    }else{Alert.alert("ENTER CORRECT PASSWORD")}
 }
userLogin = (emailId,password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId,password)
    .then((Response)=>{
    this.props.navigation.navigate('DonateScreen')
    })
    .catch(function(error){
    var errorCode = error.code
    var errorMessage = error.message
  }
    )
}
showModal =()=>{
  return(
  <Modal transparent={true}
  animationType='fade'
  visible = {this.state.isModalVisible}>
  <View>
  <KeyboardAvoidingView>
  <TextInput
  placeholder  = 'FirstName'
  maxLength = {8}
  onChangeText = {text=>{
    this.setState({
      firstName:text
    })
  }}
  />
  <TextInput
  placeholder  = 'LastName'
  maxLength = {8}
  onChangeText = {text=>{
    this.setState({
      lastName:text
    })
  }}
  />
  <TextInput
  placeholder  = 'emailId'
  maxLength = {15}
  onChangeText = {text=>{
    this.setState({
      emailId:text
    })
  }}
  />
  <TextInput
  placeholder  = 'Password'
  maxLength = {15}
  secureTextEntry = {true}
  onChangeText = {text=>{
    this.setState({
      password:text
    })
  }}
  />
  <TouchableOpacity onPress = {()=>this.userSignUp(this.state.emailId,this.state.password,this.state.confirmPassword)}>
  <Text>
  REGISTER
  </Text>
  </TouchableOpacity>
  <TouchableOpacity  onPress = {()=>{
    this.props.navigation.navigate('LoginScreen')
  }}>
<Text>
   CANCEL
</Text>
</TouchableOpacity>
</KeyboardAvoidingView>
</View>
</Modal>
  );
}
render(){
    return(
   <View style = {styles.container}>
   <View>{this.showModal()}</View>
    <View style = {styles.buttonConatiner}>
    <TextInput 
    style = {styles.loginBox}
    placeholder = "abc@example.com"
    placeholderTextColor = "blue"
    keyboardType = 'email-address'
    onChangeText = {(text)=>{
     this.setState({
         emailId:text,
     })

   }}
    />
    <TextInput
    style = {styles.loginBox}
    secureTextEntry = {true}
    placeholder = 'password'
    placeholderTextColor = "blue"
    onChangeText = {(text)=>{
        this.setState({
            password:text
        })
    }}
    />
    <TouchableOpacity style = {[styles.button,{marginBottom:20,marginTop:20}]}
    onPress = {()=>{
        this.userLogin(this.state.emailId,this.state.password)
    }}
    >
    <Text style = {styles.buttonText}>LOGIN</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {[styles.button,{marginBottom:20,marginTop:20}]}
    onPress = {()=>{
        this.setState({
          isModalVisible:true
        })
    }}
    >
    <Text style = {styles.buttonText}>SIGN UP</Text>
    </TouchableOpacity>
    
    </View>
   </View>
    );
}


}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  loginBox:{
    width:300,
    height:40,
    borderBottomWidth:1.5,
    borderColor:"black",
    fontSize:20,
    margin:10,
    padding:10
  },
  button:{
    width:300,
    height:50,
    borderRadius:25,
    justifyContent:'center',
    backgroundColor:"yellow",
    shadowColor:"black"
  },
  buttonText:{
    fontSize:20,
    color:"black",
    fontWeight:'200',
    fontColor:"black"
  },
})
