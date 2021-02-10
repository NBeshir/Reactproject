import React, { Component } from "react";
import "./App.css";
import Signin from "./components/Signin";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo/Logo";
import Register from './components/Register'
import Profile from './components/Profile'
import Signout from './components/Signout'
import { USERS } from "./data/users";
import EmailVaidator from 'email-validator';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
      name:"Lina",
      email: "",
    
      password: "",
      confirmPassword:"",
      emailError:'',
      PasswordError:'',
      data:[],
      route: "",
      signedIn : false
    };
  }
onChange =(e)=>{
  this.setState({[e.target.name]:e.target.value})
  //console.log(this.state.password, this.state.email)
}
onRouteChange =(route)=>{
if(this.state.signedIn === true){
  this.setState({route:'profile'})

}else if(this.state.signedIn === false){
  this.setState({route:'signin'})
}
else{

  this.setState({route:route})
}
//console.log(this.state.signedIn)
}
onSigninSubmit=(e)=>{
e.preventDefault()
  const{email, password} = this.state;
  const filterEmail= USERS.filter(user=> user.email === email)[0].email;
  
 
  this.setState({email:filterEmail})
  if(filterEmail === email){
   this.setState({signedIn:!this.state.signedIn})
    console.log(this.state.signedIn)
 
 }
 else{
    console.log('incorrect credential')
   }


 
}
              
  render(){
    return(
      <div>
        <Signin onChange={this.onChange}
        onRouteChange={this.onRouteChange}
         onSigninSubmit={this.onSigninSubmit}
         signedIn={this.state.signedIn}/>
      

       
      </div>
    )
  
  }
}
export default App;
