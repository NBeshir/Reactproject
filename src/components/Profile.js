import React from 'react';
import Signout from './Signout'

const  Profile= ({routeChange, signedIn,name})=>{
  
       //if(signedIn){
    
        return(
            <div>
              
                <h1>{`Hello ${name}, Welcome!`}</h1>
                <img src ="https://media.istockphoto.com/photos/smiling-young-hispanic-girl-posing-and-looking-at-the-camera-over-picture-id991204888?k=6&m=991204888&s=612x612&w=0&h=vMYuaC20DunaOO6p5GvAym2AO9k9DH6H9kanakbDoVE=" alt="" />
                <p><a href="#">change Profile Picture</a></p> 
                
                </div>
        )
        
}
//}

export default Profile;