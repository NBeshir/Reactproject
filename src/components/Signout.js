import React from 'react';


const Signout =({routeChange})=>{
    return(
        <nav style={{display:'flex', justifyContent:'center'}}>
        <input type="button" value="Sign Out" onClick={()=>routeChange('signOut')}/> 
        </nav>
    )


    

}
export default Signout;